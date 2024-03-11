import {
  FieldValues,
  useForm,
  FormProvider,
  FieldErrors,
} from 'react-hook-form'
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
import { useState } from 'react'
interface PaniniFormProps {
  isOpened?: boolean
  endFormFnc: () => void
}

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
  sandwichName: z.string().max(35).min(1),
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
    serving: z.enum(['COLD', 'WARM', 'GRILLED'], {
      required_error: 'You have to choose something',
    }),
  }),
})

const customErrorMap: z.ZodErrorMap = (issue /*ctx*/) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === 'string') {
      return { message: 'bad type!' }
    }
  }
  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `less-than-${(issue.params || {}).minimum}` }
  }
  return { message: 'Something went wrong' }
  // return { message: ctx.defaultError };
}

z.setErrorMap(customErrorMap)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PaniniForm = ({ isOpened, endFormFnc }: PaniniFormProps) => {
  const [resetFlag, setResetFlag] = useState(false)

  const methods = useForm<SandwichPayload>({
    defaultValues: { sandwichName: 'test' },
    resolver: zodResolver(schema),
  })

  const { handleSubmit, register, formState, reset } = methods
  const { errors } = formState

  const onSubmit = (data: FieldValues) =>
    console.log({
      ...data,
    })
  const onError = (errors: FieldErrors<SandwichPayload>) => {
    console.log('Form Errors', errors)
  }
  const handleReset = () => {
    setResetFlag((prev) => !prev)
    reset()
  }

  return (
    <div className={`${styles.formContainer} ${isOpened ? styles.open : ''}`}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormCard header="CONFIGURE BASE">
            <FormField>
              <h3 className={styles.fieldName}>Bread</h3>
              <CarouselSwitch
                name="bread"
                sectionName="base"
                icons={true}
                options={breadVariants}
                reset={resetFlag}
              />
            </FormField>
            <MultiPositionFormField
              name="cheese"
              sectionName="base"
              linesBetweenSelectors={false}
              selectorComponent={
                <Select name="cheese" options={cheeseVariants} />
              }
              reset={resetFlag}
            />
            <MultiPositionFormField
              name={'meat'}
              sectionName="base"
              selectorComponent={<Select name="meat" options={meatVariants} />}
              linesBetweenSelectors={false}
              reset={resetFlag}
            />
            <MultiPositionFormField
              name={'dressing'}
              sectionName="base"
              selectorComponent={
                <CarouselSwitch name="dressing" options={dressingVariants} />
              }
              linesBetweenSelectors={true}
              reset={resetFlag}
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
              reset={resetFlag}
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
              >
                {errors.extras?.serving?.message ? (
                  <div className={styles.errorMessage}>
                    {errors.extras?.serving?.message}
                  </div>
                ) : null}
              </Radio>
            </FormField>
            <FormField>
              <h3 className={styles.fieldName}>Topping</h3>
              <div className={styles.toppingsContainer}>
                <Checkbox
                  labelText={toppingVariant[0]}
                  name="topping"
                  sectionName="extras"
                />
              </div>
            </FormField>
          </FormCard>
          <FormCard header="FINALIZE ORDER">
            <FormField padding={'15px'}>
              <h3 className={styles.fieldName}>Name panini</h3>
              <div className={styles.paniniNameInputContainer}>
                <input
                  className={styles.paniniNameInput}
                  placeholder="eg. Club Panini"
                  {...register(`sandwichName`)}
                />
                <div className={styles.errorMessage}>
                  {errors.sandwichName?.message}
                </div>
              </div>
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
              type="button"
              onClick={handleReset}
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
