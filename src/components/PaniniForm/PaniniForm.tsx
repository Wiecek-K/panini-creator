import { FieldValues, useForm, FormProvider } from 'react-hook-form'

import { Multiselect } from '../Form/Multiselect/Multiselect'
import { CarouselSwitch } from '../Form/Carousel/CarouselSwitch'
import { FormCard } from '../Form/FormCard/FormCard'
import { FormField } from '../Form/FormField/FormField'
import { Checkbox } from '../Form/Checkbox/Checkbox'
import { Radio } from '../Form/Radio/Radio'
import { MultiPositionFormField } from '../Form/MultiPositionFormField/MultiPositionFormField'
import { Select } from '../Form/Select/Select'
import styles from './PaniniForm.module.css'

import { vegetableVariant } from '../../data/vegetable'
import { breadVariants } from '../../data/bread'
import { spreadVariant } from '../../data/spread'
import { servingVariant } from '../../data/serving'
import { meatVariants } from '../../data/meat'
import { dressingVariants } from '../../data/dressing'
import { cheeseVariants } from '../../data/cheese'
interface PaniniFormProps {
  isOpened?: boolean
  endFormFnc: () => void
}
// export type StepOneData = {
//   stepOne: {
//     name: string
//     imageSrc: string

//     dough: string
//     filling: string
//     ingredients: string
//   }
// }

// export type StepTwoData = {
//   stepTwo: {
//     notes: string
//     recipe: Omit<DumplingRecipe, 'name' | 'imageSrc'> & { serving: string[] }
//   }
// }

// export type FormGenerator = StepOneData & StepTwoData

export const PaniniForm = ({ isOpened }: PaniniFormProps) => {
  const onSubmit = (data: FieldValues) => console.log(data)
  const methods = useForm()

  //   const methods = useForm<FormGenerator>()

  const { handleSubmit, register } = methods

  return (
    <div className={`${styles.formContainer} ${isOpened ? styles.open : ''}`}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <FormCard header="CONFIGURE BASE">
            <FormField>
              <h3 className={styles.fieldName}>Bread</h3>
              <CarouselSwitch
                name="bread"
                icons={true}
                options={breadVariants}
              />
            </FormField>
            <MultiPositionFormField
              name="cheese"
              linesBetweenSelectors={false}
              selectorComponent={
                <Select name="cheese" options={cheeseVariants} />
              }
            />
            <MultiPositionFormField
              name={'meat'}
              selectorComponent={<Select name="meat" options={meatVariants} />}
              linesBetweenSelectors={false}
            />
            <MultiPositionFormField
              name={'dressing'}
              selectorComponent={
                <CarouselSwitch name="dressing" options={dressingVariants} />
              }
              linesBetweenSelectors={true}
            />

            <FormField>
              <h3 className={styles.fieldName}>Vegetables</h3>
              <div className={styles.multiselectContainer}>
                {vegetableVariant.map((vegetable) => (
                  <Multiselect
                    groupName="vegetableVariant"
                    name={vegetable}
                    key={`vegetableVariant.${vegetable}`}
                  />
                ))}
              </div>
            </FormField>
          </FormCard>
          <FormCard header="CONFIGURE EXTRAS">
            <FormField>
              <h3 className={styles.fieldName}>Spreads</h3>
              <div className={styles.spreadsContainer}>
                {spreadVariant.map((spread) => (
                  <Checkbox
                    labelText={spread}
                    name={`spreads.${spread}`}
                    key={`spreads.${spread}`}
                  />
                ))}
              </div>
            </FormField>
            <FormField>
              <h3 className={styles.fieldName}>Serving</h3>
              <Radio name={'serving'} options={servingVariant}></Radio>
            </FormField>
          </FormCard>
          <FormCard header="FINALIZE ORDER">
            <input placeholder="eg. Club Panini" {...register(`paniniName`)} />
            <button type="submit">PLACE ORDER</button>
            <button type="reset">START AGAIN</button>
          </FormCard> */}
        </form>
      </FormProvider>
    </div>
  )
}
