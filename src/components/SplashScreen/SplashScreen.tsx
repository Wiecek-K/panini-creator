import styles from './SplashScreen.module.css'

interface SplashScreenProps {
  header: string
  btnText: string
  btnFnc(): void
}

export const SplashScreen = ({
  header,
  btnText,
  btnFnc,
}: SplashScreenProps) => {
  return (
    <>
      <div className={styles.ringLeft} />
      <div className={styles.ringHalfLeft} />
      <div className={styles.ringHalfRight} />
      <div className={styles.ringRight} />
      <div className={styles.ringTop} />
      <div className={styles.ringBottom} />

      <div className={styles.ringCenter}>
        <div className={styles.mainBar}>
          <div className={styles.splashScreenText}>
            <h1>{header}</h1>
            <button onClick={btnFnc}>{btnText}</button>
          </div>
        </div>
      </div>
    </>
  )
}
