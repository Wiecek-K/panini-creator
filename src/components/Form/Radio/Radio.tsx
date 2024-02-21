import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Radio.module.css'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  sectionName?: string
  options: string[]
}

export const Radio = ({
  name,
  sectionName = '',
  options,
  ...rest
}: RadioProps) => {
  const { register } = useFormContext()
  return (
    <>
      {options.map((option) => {
        return (
          <div className={styles.container} key={`${name}.${option}`}>
            <input
              {...register(sectionName ? `${sectionName}.${name}` : name)}
              className={styles.input}
              id={`${name}.${option}`}
              type="radio"
              value={option}
              {...rest}
            />
            <label className={styles.label} htmlFor={`${name}.${option}`}>
              <span>{option}</span>
              <span className={styles.checkmark}></span>
            </label>
          </div>
        )
      })}
    </>
  )
}
