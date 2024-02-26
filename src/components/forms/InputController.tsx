import { FC, ReactElement } from 'react'
import {
  FieldValues,
  Path,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form'

export interface InputControllerProps<T extends FieldValues> {
  name: Path<T>
  form: UseFormReturn<T>
  children: FC<UseFormRegisterReturn<Path<T>>>
}

export function InputController<T extends FieldValues>({
  name,
  form,
  children,
}: InputControllerProps<T>) {
  const { register } = form

  return <>{children(register(name))}</>
}
