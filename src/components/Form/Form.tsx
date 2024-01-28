import styles from './Form.module.css'

interface FormProps {
  isOpened?: boolean
  endFormFnc: () => void
}

export const Form = ({ isOpened, endFormFnc }: FormProps) => {
  return (
    <div className={`${styles.formContainer} ${isOpened ? styles.open : ''}`}>
      <div className={styles.formHeaderBar}>
        <h3>Panini Creator</h3>
        <button> Randomize Panini</button>
      </div>
      <div className={styles.formCard}></div>
      <div className={styles.formCard}></div>
      <div className={styles.formCard}></div>
    </div>
  )
}
