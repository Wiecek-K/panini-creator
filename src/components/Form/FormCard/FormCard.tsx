import { PropsWithChildren } from 'react'
import styles from './FormCard.module.css'

interface FormCardProps extends PropsWithChildren<object> {
  header: string
}

export const FormCard = ({ children, header }: FormCardProps) => {
  return (
    <div className={styles.formCard}>
      <h2 className={styles.cardHeader}>{header}</h2>
      {children}
    </div>
  )
}
