import { createForm, FormProps, createFormAction, FormSchema } from 'remix-forms'
import { Form as RouterForm, useActionData, useSubmit, useNavigation, redirect, json } from 'react-router-dom'
import { Input, InputError } from '../input'

export const BaseForm = createForm({
  component: RouterForm,
  useNavigation,
  useSubmit,
  useActionData,
})

export const formAction = createFormAction({ redirect, json })

export function Form<Schema extends FormSchema>(props: FormProps<Schema>) {
  return <BaseForm inputComponent={Input} errorComponent={InputError} {...props} />
}
