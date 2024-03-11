import { useFormContext, useFieldArray } from 'react-hook-form'
import React, { ReactElement, useState, useEffect } from 'react'
import { FormField } from '../FormField/FormField'
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import { SwitchBtn } from './SwitchBtn/SwitchBtn'
import { SubstractBtn } from './SubstractBtn/SubstractBtn'
import { AddBtn } from './AddBtn/AddBtn'
import styles from './MultiPositionFormField.module.css'

interface MultiPositionFormFieldProps {
  name: string
  sectionName?: string
  selectorComponent: ReactElement
  linesBetweenSelectors: boolean
  reset?: boolean
}

export const MultiPositionFormField = ({
  name,
  sectionName = '',
  selectorComponent,
  linesBetweenSelectors,
  reset,
}: MultiPositionFormFieldProps) => {
  const componentName = sectionName ? `${sectionName}.${name}` : name

  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: componentName,
  })

  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setIsChecked(false)
    remove()
  }, [reset])

  const handleSwitchBtnChange = (isChecked: boolean) => {
    !isChecked ? append({}) : remove()
  }

  return (
    <FormField>
      <div
        className={`${styles.container} ${
          linesBetweenSelectors ? styles.containerWhitLines : null
        }`}
      >
        <div className={styles.headerContainer}>
          <h3 className={styles.fieldName}>{capitalizeFirstLetter(name)}</h3>
        </div>
        <div className={styles.buttonContainer}>
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
        {fields.map((field, index) => (
          <>
            {index === 0 ? null : (
              <>
                <div></div>
                <div className={styles.buttonContainer}>
                  <SubstractBtn
                    key={field.id + '_substract'}
                    onClick={() => remove(index)}
                  />
                </div>
              </>
            )}
            <div className={styles.gap}></div>
            <div
              className={`${styles.selectorContainer} ${
                index !== fields.length - 1 && linesBetweenSelectors
                  ? styles.line
                  : null
              }`}
            >
              {React.cloneElement(selectorComponent, {
                name: `${name}.${index}`,
                sectionName: sectionName,
                key: field.id,
              })}
            </div>
          </>
        ))}
      </div>
    </FormField>
  )
}
