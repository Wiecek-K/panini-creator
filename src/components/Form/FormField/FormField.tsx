import { PropsWithChildren } from 'react'
import styles from './FormField.module.css'

export const FormField = ({ children }: PropsWithChildren<object>) => {
  return <div className={styles.formField}>{children}</div>
}
