import { FieldValues, useForm } from 'react-hook-form'
import { Form } from '../Form/Form'
import { Multiselect } from '../Form/Multiselect/Multiselect'
import styles from './PaniniForm.module.css'

import { vegetableVariant } from '../../data/vegetable'
interface PaniniFormProps {
  isOpened?: boolean
  endFormFnc: () => void
}

export const PaniniForm = ({ isOpened }: PaniniFormProps) => {
  const onSubmit = (data: FieldValues) => console.log(data)
  const {
    register,
    // watch,
  } = useForm()
  return (
    <div className={`${styles.formContainer} ${isOpened ? styles.open : ''}`}>
      <Form onSubmit={onSubmit}>
        {vegetableVariant.map((vegetable) => (
          <Multiselect
            groupName="vegetableVariant"
            name={vegetable}
            key={`vegetableVariant.${vegetable}`}
          />
        ))}
        <input placeholder="eg. Club Panini" {...register(`name`)} />
        <button type="submit">PLACE ORDER</button>
        <button type="reset">START AGAIN</button>
        {/* <Multiselect groupName="vegetables" name="onion" />
        <Multiselect groupName="vegetables" name="tomato" /> */}
        {/* <Select name="gender" options={['female', 'male', 'other']} /> */}

        {/* <Input type="submit" value="Submit" /> */}
      </Form>
    </div>
  )
}
