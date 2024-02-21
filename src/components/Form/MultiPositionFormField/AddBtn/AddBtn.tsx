import { ButtonHTMLAttributes } from 'react'
import styles from './AddBtn.module.css'

export const AddBtn = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" className={styles.addBtn} {...rest}>

    </button>
  )
}
