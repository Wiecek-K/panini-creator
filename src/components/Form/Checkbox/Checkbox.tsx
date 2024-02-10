import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  labelText: string
}

export const Checkbox = ({ name, labelText, ...rest }: CheckboxProps) => {
  const { register } = useFormContext()
  return (
    <>
      <input
        className={styles.input}
        type="checkbox"
        {...register(name)}
        {...rest}
      />
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
    </>
  )
}
