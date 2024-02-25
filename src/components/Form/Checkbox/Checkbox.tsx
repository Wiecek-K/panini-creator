import { InputHTMLAttributes, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  labelText: string
  sectionName?: string
  initalValue?: boolean
}

export const Checkbox = ({
  name,
  sectionName = '',
  labelText,
  initalValue = false,
  ...rest
}: CheckboxProps) => {
  const componentName = sectionName ? `${sectionName}.${name}` : name
  const { register, setValue } = useFormContext()

  useEffect(() => {
    setValue(componentName, initalValue)
  }, [])

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="checkbox"
        id={name}
        {...register(componentName)}
        {...rest}
      />
      <label className={styles.label} htmlFor={name}>
        <span>{labelText}</span>
        <span className={styles.checkmark}></span>
      </label>
    </div>
  )
}
