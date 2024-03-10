import { InputHTMLAttributes, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import styles from './Multiselect.module.css'

interface MultiselectProps extends InputHTMLAttributes<HTMLInputElement> {
  groupName: string
  options: string[]
  sectionName?: string
}

export const Multiselect = ({
  groupName,
  options,
  sectionName,
  ...rest
}: MultiselectProps) => {
  const { register, setValue } = useFormContext()
  const arrayName = sectionName ? `${sectionName}.${groupName}` : `${groupName}`

  useEffect(() => {
    setValue(arrayName, [])
  }, [])

  return (
    <>
      {options.map((option) => (
        <div className={styles.multiselectField} key={option}>
          <input
            className={styles.input}
            type="checkbox"
            id={option}
            value={option}
            {...register(arrayName)}
            {...rest}
          />
          <label className={styles.label} htmlFor={option}>
            {capitalizeFirstLetter(option)}
          </label>
        </div>
      ))}
    </>
  )
}
