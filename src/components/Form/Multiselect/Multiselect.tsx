import { InputHTMLAttributes } from 'react'
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
  const { setValue, getValues } = useFormContext()
  const arrayName = sectionName ? `${sectionName}.${groupName}` : `${groupName}`

  setValue(arrayName, [])

  return (
    <>
      {options.map((option) => (
        <div className={styles.multiselectField} key={option}>
          <input
            className={styles.input}
            type="checkbox"
            id={option}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.checked
                ? setValue(arrayName, [...getValues(arrayName), option])
                : setValue(
                    arrayName,
                    getValues(arrayName).filter(
                      (item: string) => item !== option
                    )
                  )
            }}
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
