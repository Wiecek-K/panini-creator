import { useFormContext, useFieldArray } from 'react-hook-form'
import React, { ReactElement, useState } from 'react'
import { FormField } from '../FormField/FormField'
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import { SwitchBtn } from './SwitchBtn/SwitchBtn'
import { SubstractBtn } from './SubstractBtn/SubstractBtn'
import { AddBtn } from './AddBtn/AddBtn'
import styles from './MultiPositionFormField.module.css'

interface MultiPositionFormFieldProps {
  name: string
  selectorComponent: ReactElement
}

export const MultiPositionFormField = ({
  name,
  selectorComponent,
}: MultiPositionFormFieldProps) => {
  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  })

  const [isChecked, setIsChecked] = useState(false)

  const handleSwitchBtnChange = (isChecked: boolean) => {
    !isChecked ? append({}) : remove()
  }

  return (
    <FormField>
      <div className={styles.headerContainer}>
        <h3 className={styles.fieldName}>{capitalizeFirstLetter(name)}</h3>
        <div className={styles.buttonsContainer}>
          <div className={styles.switchBtnContainer}>
            <SwitchBtn
              isChecked={isChecked}
              onClick={() => {
                setIsChecked(!isChecked)
              }}
              onChange={() => {
                handleSwitchBtnChange(isChecked)
              }}
            />
            {isChecked && <AddBtn onClick={() => append({})} />}
          </div>
          {fields.map((field, index) =>
            index === 0 ? null : (
              <SubstractBtn key={field.id} onClick={() => remove(index)} />
            )
          )}
        </div>
      </div>

      <div className={styles.selectorsColumn}>
        {fields.map((field, index) => {
          return (
            <>
              <div key={field.id}>
                {React.cloneElement(selectorComponent, {
                  name: `${name}.${index}`,
                })}
              </div>
              {index !== fields.length - 1 ? (
                <div className={styles.line} />
              ) : null}
            </>
          )
        })}
      </div>
    </FormField>
  )
}
// ;<CarouselSwitch
//   icons={false}
//   name={`${groupName}.${index}`}
//   options={meatVariants}
// />
