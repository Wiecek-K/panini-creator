import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import styles from './Multiselect.module.css'

interface MultiselectProps extends InputHTMLAttributes<HTMLInputElement> {
  groupName: string
  sectionName?: string
}

export const Multiselect = ({
  groupName,
  name,
  sectionName,
  ...rest
}: MultiselectProps) => {
  const { register } = useFormContext()
  return name ? (
    <div className={styles.multiselectField}>
      <input
        className={styles.input}
        type="checkbox"
        id={name}
        {...register(
          `${sectionName ? sectionName + '.' : ''}${groupName}.${name}`
        )}
        {...rest}
      />
      <label className={styles.label} htmlFor={name}>
        {capitalizeFirstLetter(name)}
      </label>
    </div>
  ) : null
}
