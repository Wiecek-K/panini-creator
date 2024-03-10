import { InputHTMLAttributes, PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Radio.module.css'

interface RadioProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren<object> {
  name: string
  sectionName?: string
  options: string[]
}

export const Radio = ({
  name,
  sectionName = '',
  options,
  children,
  ...rest
}: RadioProps) => {
  const { register } = useFormContext()
  const componentName = sectionName ? `${sectionName}.${name}` : name
  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <div key={`${name}.${option}`}>
            <input
              {...register(componentName)}
              className={styles.input}
              id={`${name}.${option}`}
              type="radio"
              value={option}
              {...rest}
            />
            <label className={styles.label} htmlFor={`${name}.${option}`}>
              <span className={styles.checkmark}></span>
              <span>{option}</span>
            </label>
          </div>
        )
      })}
      <div className={styles.errorContainer}>{children}</div>
    </div>
  )
}
