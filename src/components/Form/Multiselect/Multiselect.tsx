import { InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import styles from './Multiselect.module.css'

interface MultiselectProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<FieldValues>
  groupName: string
}

export const Multiselect = ({
  register,
  groupName,
  name,
  ...rest
}: MultiselectProps) => {
  return name && register ? (
    <>
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
    </>
  ) : null
}
