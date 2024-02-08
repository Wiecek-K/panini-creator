import { FieldValues, useForm, FormProvider } from 'react-hook-form'

import { Multiselect } from '../Form/Multiselect/Multiselect'
import { CarouselSwitch } from '../Form/Carousel/CarouselSwitch'
import styles from './PaniniForm.module.css'

import { vegetableVariant } from '../../data/vegetable'
import { breadVariants } from '../../data/bread'
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
          {vegetableVariant.map((vegetable) => (
            <Multiselect
              groupName="vegetableVariant"
              name={vegetable}
              key={`vegetableVariant.${vegetable}`}
            />
          ))}
          <CarouselSwitch name="bread" icons={true} options={breadVariants} />
          <input placeholder="eg. Club Panini" {...register(`paniniName`)} />
          <button type="submit">PLACE ORDER</button>
          <button type="reset">START AGAIN</button>
          {/* <Multiselect groupName="vegetables" name="onion" />
        <Multiselect groupName="vegetables" name="tomato" /> */}
          {/* <Select name="gender" options={['female', 'male', 'other']} /> */}

          {/* <Input type=  "submit" value="Submit" /> */}
        </form>
      </FormProvider>
    </div>
  )
}
