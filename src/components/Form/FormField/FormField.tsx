import { PropsWithChildren } from 'react'
import styles from './FormField.module.css'

interface FormFieldProps extends PropsWithChildren<object> {
  padding?: string
}
export const FormField = ({ children, padding = '20px' }: FormFieldProps) => {
  return (
    <div
      className={styles.formField}
      style={{ paddingTop: padding, paddingBottom: padding }}
    >
      {children}
    </div>
  )
}
