import styles from './SplashScreen.module.css'

interface SplashScreenProps {
  header: string
  btnText: string
  isClosing?: boolean
  btnFnc(): void
}

export const SplashScreen = ({
  header,
  btnText,
  isClosing = false,
  btnFnc,
}: SplashScreenProps) => {
  return (
    <>
      <div
        className={`${styles.ringLeft} ${isClosing ? styles.moveRingLeft : ''}`}
      />
      <div
        className={`${styles.ringHalfLeft} ${
          isClosing ? styles.moveRingHalfLeft : ''
        }`}
      />
      <div
        className={`${styles.ringHalfRight} ${
          isClosing ? styles.moveRingHalfRight : ''
        }`}
      />
      <div
        className={`${styles.ringRight} ${
          isClosing ? styles.moveRingRight : ''
        }`}
      />
      <div
        className={`${styles.ringTop} ${isClosing ? styles.moveRingTop : ''}`}
      />
      <div
        className={`${styles.ringBottom} ${
          isClosing ? styles.moveRingBottom : ''
        }`}
      />

      <div
        className={`${styles.ringCenterStatic} ${
          isClosing ? styles.isClosing : ''
        }`}
      >
        <div
          className={`${styles.mainBar} ${isClosing ? styles.isClosing : ''}`}
        />
      </div>

      <div
        className={`${styles.ringCenterAnimated} ${
          isClosing ? styles.isClosing : ''
        }`}
      ></div>
      <div className={styles.splashScreenText}>
        <h1 className={isClosing ? '' : styles.textBackground}>{header}</h1>
        <button
          className={`${isClosing ? '' : styles.textBackground} ${
            styles.button
          }`}
          onClick={btnFnc}
        >
          {btnText}
        </button>
      </div>
    </>
  )
}
