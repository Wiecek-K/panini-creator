import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './CheckboxGroup.module.css'

interface CheckboxGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  groupName: string
  sectionName?: string
  options: string[]
}

export const CheckboxGroup = ({
  groupName,
  sectionName,
  options,
  ...rest
}: CheckboxGroupProps) => {
  const componentName = sectionName ? `${sectionName}.${groupName}` : groupName
  const { register } = useFormContext()

  return (
    <>
      {options.map((option) => (
        <div className={styles.container} key={componentName + option}>
          <input
            className={styles.input}
            type="checkbox"
            id={option}
            value={option}
            {...register(componentName)}
            {...rest}
          />
          <label className={styles.label} htmlFor={option}>
            <span>{option}</span>
            <span className={styles.checkmark}></span>
          </label>
        </div>
      ))}
    </>
  )
}
