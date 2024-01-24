import styles from './Form.module.css'

interface FormProps {
  isOpened?: boolean
  endFormFnc: () => void
}

export const Form = ({ isOpened, endFormFnc }: FormProps) => {
  return (
    <div className={`${styles.test} ${isOpened ? styles.open : ''}`}>
      <button onClick={endFormFnc}></button>
    </div>
  )
}
