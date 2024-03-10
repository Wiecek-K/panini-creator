import { FieldValues, useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Multiselect } from '../Form/Multiselect/Multiselect'
import { CarouselSwitch } from '../Form/Carousel/CarouselSwitch'
import { FormCard } from '../Form/FormCard/FormCard'
import { FormField } from '../Form/FormField/FormField'
import { CheckboxGroup } from '../Form/CheckboxGroup/CheckboxGroup'
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
export interface SandwichPayload {
  sandwichName: string // Max. 35 characters
  cutlery: boolean
  napkins: boolean
  base: {
    bread: 'FULL GRAIN' | 'WHEAT'
    cheese: Array<'MOZZARELLA' | 'STRACIATELLA' | 'EDAM' | 'GOUDA'>
    meat: Array<'SALAMI' | 'HAM' | 'BACON' | 'CHICKEN'>
    dressing: Array<'OLIVE OIL' | 'HONEY_MUSTARD' | 'RANCH' | 'MAYO'>
    vegetables: Array<
      | 'SALAD'
      | 'TOMATO'
      | 'OBERGINE'
      | 'BEETROOT'
      | 'PICKLES'
      | 'ONION'
      | 'PEPPER'
      | 'ASPARAGUS'
      | 'CUCUMBER'
    >
  }
  extras: {
    egg: Array<'FRIED EGG' | 'OMELET' | 'SCRAMBLED EGG' | 'POACHED EGG'>
    spreads: Array<'BUTTER' | 'HUMMUS' | 'GUACAMOLE'>
    serving: 'COLD' | 'WARM' | 'GRILLED'
    topping: 'SESAME' | null | false
  }
}

const schema: z.ZodType<SandwichPayload> = z.object({
  sandwichName: z.string().max(35),
  napkins: z.boolean(),
  cutlery: z.boolean(),
  base: z.object({
    bread: z.enum(['FULL GRAIN', 'WHEAT']),
    cheese: z.array(z.enum(['MOZZARELLA', 'STRACIATELLA', 'EDAM', 'GOUDA'])),
    dressing: z.array(z.enum(['OLIVE OIL', 'HONEY_MUSTARD', 'RANCH', 'MAYO'])),
    meat: z.array(z.enum(['SALAMI', 'HAM', 'BACON', 'CHICKEN'])),
    vegetables: z.array(
      z.enum([
        'SALAD',
        'TOMATO',
        'CUCUMBER',
        'ONION',
        'PICKLES',
        'PEPPER',
        'ASPARAGUS',
        'BEETROOT',
        'OBERGINE',
      ])
    ),
  }),
  extras: z.object({
    egg: z.array(
      z.enum(['FRIED EGG', 'OMELET', 'SCRAMBLED EGG', 'POACHED EGG'])
    ),
    spreads: z.array(z.enum(['BUTTER', 'HUMMUS', 'GUACAMOLE'])),
    topping: z.union([z.enum(['SESAME']), z.null(), z.literal(false)]),
    serving: z.enum(['COLD', 'WARM', 'GRILLED']),
  }),
})

export const PaniniForm = ({ isOpened, endFormFnc }: PaniniFormProps) => {
  const onSubmit = (data: FieldValues) =>
    console.log({
      ...data,
    })
  const methods = useForm({ defaultValues: { sandwichName: 'test' } })
  // { resolver: zodResolver(schema) }
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
                <Multiselect
                  groupName="vegetables"
                  sectionName="base"
                  options={vegetableVariant}
                />
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
                <CheckboxGroup
                  groupName="spreads"
                  options={spreadVariant}
                  sectionName="extras"
                />
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
                <Checkbox
                  labelText={toppingVariant[0]}
                  name="toping"
                  sectionName="extras"
                />
              </div>
            </FormField>
          </FormCard>
          <FormCard header="FINALIZE ORDER">
            <FormField padding={'15px'}>
              <h3 className={styles.fieldName}>Name panini</h3>
              <input
                className={styles.paniniNameInput}
                placeholder="eg. Club Panini"
                {...register(`sandwichName`)}
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
              // onClick={endFormFnc}
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
