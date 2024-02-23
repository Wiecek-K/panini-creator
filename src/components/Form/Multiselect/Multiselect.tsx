import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import styles from './Multiselect.module.css'

interface MultiselectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
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
  const componentName = sectionName
    ? `${sectionName}.${groupName}.${name}`
    : `${groupName}.${name}`

  return name ? (
    <div className={styles.multiselectField}>
      <input
        className={styles.input}
        type="checkbox"
        id={name}
        {...register(componentName)}
        {...rest}
      />
      <label className={styles.label} htmlFor={name}>
        {capitalizeFirstLetter(name)}
      </label>
    </div>
  ) : null
}
