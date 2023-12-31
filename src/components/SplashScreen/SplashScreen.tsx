import styles from './SplashScreen.module.css'

interface ButtonIconProps {
  icon: React.ReactNode
  testId?: string
  onClick(): void
}

export const ButtonIcon = (props: ButtonIconProps) => (
  <button
    className={styles.button}
    onClick={props.onClick}
    {...(props.testId ? { 'data-testid': props.testId } : {})}
  >
    {props.icon}
  </button>
)

export const SplashScreen = () => {
  return <div>SplashScreen</div>
}
