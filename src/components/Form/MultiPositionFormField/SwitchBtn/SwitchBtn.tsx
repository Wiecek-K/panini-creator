import { InputHTMLAttributes, useState } from 'react'

import styles from './SwitchBtn.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  handleSwitchBtnChange(state: boolean): void //w appie funkcje w zależności od przekazanego stanu: usuń wyszystko z tablicy/dodaj pierwszy rekord do tablicy
}

export const SwitchBtn = ({
  handleSwitchBtnChange,
  ...rest
}: CheckboxProps) => {
  const [isChecked, setisChecked] = useState(false)

  const changeCheckbox = () => {
    setisChecked((prev) => !prev)
    handleSwitchBtnChange(isChecked)
  }

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        onChange={() => changeCheckbox()}
        {...rest}
      />
      <span className={styles.slider}></span>
    </label>
  )
}
