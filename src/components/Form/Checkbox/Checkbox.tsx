import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  labelText: string
  sectionName?: string
}

export const Checkbox = ({
  name,
  labelText,
  sectionName = '',
  ...rest
}: CheckboxProps) => {
  const { register } = useFormContext()
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="checkbox"
        id={name}
        {...register(sectionName ? `${sectionName}.${name}` : name)}
        {...rest}
      />
      <label className={styles.label} htmlFor={name}>
        <span>{labelText}</span>
        <span className={styles.checkmark}></span>
      </label>
    </div>
  )
}
