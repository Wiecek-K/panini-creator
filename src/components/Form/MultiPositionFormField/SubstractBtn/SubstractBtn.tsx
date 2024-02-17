import { ButtonHTMLAttributes } from 'react'
import styles from './SubstractBtn.module.css'

// type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement>

export const SubstractBtn = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" className={styles.substractBtn} {...rest}>
      <div className={styles.minus}></div>
    </button>
  )
}
