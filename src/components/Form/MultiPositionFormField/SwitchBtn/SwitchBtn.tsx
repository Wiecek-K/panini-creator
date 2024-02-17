import { InputHTMLAttributes, useState } from 'react'

import styles from './SwitchBtn.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean
}

export const SwitchBtn = ({ isChecked, ...rest }: CheckboxProps) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        {...rest}
      />
      <span className={styles.slider}></span>
    </label>
  )
}
