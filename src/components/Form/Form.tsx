import styles from './Form.module.css'

interface FormProps {
  isOpened?: boolean
}

export const Form = ({ isOpened }: FormProps) => {
  return <div className={`${styles.test} ${isOpened ? styles.open : ''}`} />
}
