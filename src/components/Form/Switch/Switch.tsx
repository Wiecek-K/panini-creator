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
    <label className={styles.switch}>
      <input type="checkbox" {...rest} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  )
}
