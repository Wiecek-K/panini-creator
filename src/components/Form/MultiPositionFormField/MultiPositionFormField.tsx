import { useFormContext, useFieldArray } from 'react-hook-form'
import React, { ReactElement } from 'react'
import { FormField } from '../FormField/FormField'
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import { SwitchBtn } from './SwitchBtn/SwitchBtn'
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

  return (
    <FormField>
      <div>
        <h3 className={styles.fieldName}>{capitalizeFirstLetter(name)}</h3>

        <SwitchBtn
          handleSwitchBtnChange={() => {
            null
          }}
        />
      </div>
      <div>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section className={'section'} key={field.id}>
                {React.cloneElement(selectorComponent, {
                  name: `${name}.${index}`,
                })}
                <button type="button" onClick={() => remove(index)}>
                  DELETE
                </button>
              </section>
            </div>
          )
        })}
        <button type="button" onClick={() => append({})}>
          APPEND
        </button>
      </div>
    </FormField>
  )
}
// ;<CarouselSwitch
//   icons={false}
//   name={`${groupName}.${index}`}
//   options={meatVariants}
// />
