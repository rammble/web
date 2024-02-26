import { PropsWithChildren, ReactElement } from 'react'
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'

export interface FormControllerProps<T extends FieldValues> {
  children: (props: UseFormReturn<T>) => ReactElement
}

export function FormController<T extends FieldValues>({
  children,
}: PropsWithChildren<FormControllerProps<T>>) {
  const form = useForm<T>()
  return <form>{children(form)}</form>
}
