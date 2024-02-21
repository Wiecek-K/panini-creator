import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import styles from './Multiselect.module.css'

interface MultiselectProps extends InputHTMLAttributes<HTMLInputElement> {
  groupName: string
}

export const Multiselect = ({ groupName, name, ...rest }: MultiselectProps) => {
  const { register } = useFormContext()
  return name ? (
    <div className={styles.multiselectField}>
      <input
        className={styles.input}
        type="checkbox"
        id={name}
        {...register(`${groupName}.${name}`)}
        {...rest}
      />
      <label className={styles.label} htmlFor={name}>
        {capitalizeFirstLetter(name)}
      </label>
    </div>
  ) : null
}
