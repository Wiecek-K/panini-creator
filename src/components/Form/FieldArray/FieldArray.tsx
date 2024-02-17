import { useFormContext, useFieldArray } from 'react-hook-form'

import { CarouselSwitch } from '../Carousel/CarouselSwitch'
import { meatVariants } from '../../../data/meat'
// import styles from './FieldArray.module.css'

interface FieldArrayProps {
  groupName: string
}

export const FieldArray = ({ groupName }: FieldArrayProps) => {
  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: groupName,
  })




  return (
    <div className={groupName}>
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <section className={'section'} key={field.id}>
              <CarouselSwitch
                icons={false}
                name={`${groupName}.${index}`}
                options={meatVariants}
              />
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
  )
}
