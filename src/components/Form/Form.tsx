import React, { ReactNode } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import styles from './Form.module.css'
interface FormProps {
  defaultValues?: FieldValues
  children: ReactNode
  onSubmit: SubmitHandler<FieldValues>
}
export const Form = ({ defaultValues, children, onSubmit }: FormProps) => {
  const methods = useForm({ defaultValues })
  const { handleSubmit } = methods

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props.name) {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              register: methods.register,
              key: child.props.name,
            },
          })
        } else {
          return child
        }
      })}
    </form>
  )
}
