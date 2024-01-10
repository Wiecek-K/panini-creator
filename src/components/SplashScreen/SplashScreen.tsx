import styles from './SplashScreen.module.css'
import { CSSTransition } from 'react-transition-group'
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
    <CSSTransition in={isClosing} classNames={{ ...styles }} timeout={30000}>
      <div className={styles.splashScreen}>
        <div className={styles.ringLeft} />
        <div className={styles.ringHalfLeft} />
        <div className={styles.ringHalfRight} />
        <div className={styles.ringRight} />
        <div className={styles.ringTop} />
        <div className={styles.ringBottom} />

        <div className={styles.ringCenterStatic}>
          <div className={styles.mainBar} />
        </div>
        <div className={styles.ringCenterAnimated} />

        <div className={styles.splashScreenText}>
          <h1 className={styles.splashScreenHeader}>{header}</h1>
          <button className={styles.splashScreenButton} onClick={btnFnc}>
            {btnText}
          </button>
        </div>
      </div>
    </CSSTransition>
  )
}
