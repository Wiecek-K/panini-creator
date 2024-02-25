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
import { eggVariants } from '../../data/egg'
import { toppingVariant } from '../../data/topping'
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
  const onSubmit = (data: FieldValues) =>
    console.log({
      ...data,
      base: {
        ...data.base,
        vegetableVariant: Object.keys(data.base.vegetableVariant).filter(
          (key) => data.base.vegetableVariant[key]
        ),
      },
    })
  const methods = useForm()

  //   const methods = useForm<FormGenerator>()

  const { handleSubmit, register } = methods

  return (
    <div className={`${styles.formContainer} ${isOpened ? styles.open : ''}`}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormCard header="CONFIGURE BASE">
            <FormField>
              <h3 className={styles.fieldName}>Bread</h3>
              <CarouselSwitch
                name="bread"
                sectionName="base"
                icons={true}
                options={breadVariants}
              />
            </FormField>
            <MultiPositionFormField
              name="cheese"
              sectionName="base"
              linesBetweenSelectors={false}
              selectorComponent={
                <Select name="cheese" options={cheeseVariants} />
              }
            />
            <MultiPositionFormField
              name={'meat'}
              sectionName="base"
              selectorComponent={<Select name="meat" options={meatVariants} />}
              linesBetweenSelectors={false}
            />
            <MultiPositionFormField
              name={'dressing'}
              sectionName="base"
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
                    sectionName="base"
                    key={`vegetableVariant.${vegetable}`}
                  />
                ))}
              </div>
            </FormField>
          </FormCard>
          <FormCard header="CONFIGURE EXTRAS">
            <MultiPositionFormField
              name={'egg'}
              sectionName="extras"
              selectorComponent={<Select name="egg" options={eggVariants} />}
              linesBetweenSelectors={false}
            />

            <FormField>
              <h3 className={styles.fieldName}>Spreads</h3>
              <div className={styles.spreadsContainer}>
                {spreadVariant.map((spread) => (
                  <Checkbox
                    labelText={spread}
                    name={`spreads.${spread}`}
                    sectionName="extras"
                    key={`spreads.${spread}`}
                  />
                ))}
              </div>
            </FormField>
            <FormField>
              <h3 className={styles.fieldName}>Serving</h3>
              <Radio
                name={'serving'}
                sectionName="extras"
                options={servingVariant}
              ></Radio>
            </FormField>
            <FormField>
              <h3 className={styles.fieldName}>Topping</h3>
              <div className={styles.toppingsContainer}>
                {toppingVariant.map((topping) => (
                  <Checkbox
                    labelText={topping}
                    name={`topping.${topping}`}
                    key={`topping.${topping}`}
                    sectionName="extras"
                  />
                ))}
              </div>
            </FormField>
          </FormCard>
          <FormCard header="FINALIZE ORDER">
            <FormField>
              <h3 className={styles.fieldName}>Name panini</h3>
              <input
                className={styles.paniniNameInput}
                placeholder="eg. Club Panini"
                {...register(`paniniName`)}
              />
            </FormField>
            <FormField>
              <h3 className={styles.fieldName}>Cutlery</h3>
              <Checkbox labelText="ADD TO ORDER" name="cutlery" />
            </FormField>
            <FormField>
              <h3 className={styles.fieldName}>Napkins</h3>
              <Checkbox labelText="ADD TO ORDER" name="napkins" />
            </FormField>
            <button
              type="submit"
              className={styles.primaryBtn + ' ' + styles.submitBtn}
            >
              PLACE ORDER
            </button>
            <button
              type="reset"
              className={styles.secondaryBtn + ' ' + styles.resetBtn}
            >
              START AGAIN
            </button>
          </FormCard>
        </form>
      </FormProvider>
    </div>
  )
}
