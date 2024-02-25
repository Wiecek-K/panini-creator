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
  sectionName?: string
  selectorComponent: ReactElement
  linesBetweenSelectors: boolean
}

export const MultiPositionFormField = ({
  name,
  sectionName = '',
  selectorComponent,
  linesBetweenSelectors,
}: MultiPositionFormFieldProps) => {
  const componentName = sectionName ? `${sectionName}.${name}` : name

  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: componentName,
  })

  const [isChecked, setIsChecked] = useState(false)

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
  //   <FormField>
  //     <div className={styles.headerContainer}>
  //       <h3 className={styles.fieldName}>{capitalizeFirstLetter(name)}</h3>
  //       <div className={styles.buttonsContainer}>
  //         <div className={styles.switchBtnContainer}>
  //           <SwitchBtn
  //             isChecked={isChecked}
  //             onClick={() => {
  //               setIsChecked(!isChecked)
  //             }}
  //             onChange={() => {
  //               handleSwitchBtnChange(isChecked)
  //             }}
  //           />
  //           {isChecked && <AddBtn onClick={() => append({})} />}
  //         </div>
  //         {fields.map((field, index) =>
  //           index === 0 ? null : (
  //             <SubstractBtn
  //               key={field.id + '_substract'}
  //               onClick={() => remove(index)}
  //             />
  //           )
  //         )}
  //       </div>
  //     </div>

  //     <div className={styles.selectorsColumn}>
  //       {fields.map((field, index) => {
  //         return (
  //           <>
  //             {React.cloneElement(selectorComponent, {
  //               name: `${name}.${index}`,
  //               sectionName: sectionName,
  //               key: field.id,
  //             })}
  //             {index !== fields.length - 1 && linesBetweenSelectors ? (
  //               <div className={styles.line} />
  //             ) : null}
  //           </>
  //         )
  //       })}
  //     </div>
  //   </FormField>
  // )
}
// ;<CarouselSwitch
//   icons={false}
//   name={`${groupName}.${index}`}
//   options={meatVariants}
// />
