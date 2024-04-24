import { PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Radio.module.css'

interface RadioProps extends PropsWithChildren<object> {
  name: string
  sectionName?: string
  options: string[]
  shape?: 'square' | 'round'
  isDeselectable?: boolean
}

export const Radio = ({
  name,
  sectionName = '',
  options,
  children,
  isDeselectable = false,
  shape = 'round',
}: RadioProps) => {
  const { register, watch, setValue } = useFormContext()
  const componentName = sectionName ? `${sectionName}.${name}` : name

  const selectedOption = watch(componentName)
  const handleOptionChange = (value: string) => {
    if (selectedOption === value) {
      setValue(componentName, null)
    } else {
      setValue(componentName, value)
    }
  }

  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <div key={`${name}.${option}`}>
            {isDeselectable ? (
              <input
                {...register(componentName)}
                className={styles.input}
                id={`${name}.${option}`}
                type="radio"
                value={option}
                checked={selectedOption === option}
                onClick={() => handleOptionChange(option)}
              />
            ) : (
              <input
                {...register(componentName)}
                className={styles.input}
                id={`${name}.${option}`}
                type="radio"
                value={option}
              />
            )}

            <label className={styles.label} htmlFor={`${name}.${option}`}>
              <span
                className={`${styles.checkmark} ${styles[`${shape}Checkmark`]}`}
              ></span>
              <span>{option}</span>
            </label>
          </div>
        )
      })}
      <div className={styles.errorContainer}>{children}</div>
    </div>
  )
}
