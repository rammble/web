import { FC, ReactNode } from 'react'
import { FormController } from 'src/components/forms/FormController'
import { InputController } from 'src/components/forms/InputController'
import { z } from 'zod'

const LoginSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(3).max(20),
})

type LoginSchemaType = z.infer<typeof LoginSchema>

export interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  return (
    <FormController<LoginSchemaType>>
      {(form) => (
        <>
          <InputController<LoginSchemaType> name="username" form={form}>
            {({ value, onChange }) => (
              <input value={value} onChange={onChange} />
            )}
          </InputController>
          <InputController<LoginSchemaType> name="password" form={form}>
            {({ value, onChange }) => (
              <input value={value} onChange={onChange} />
            )}
          </InputController>
        </>
      )}
    </FormController>
  )
}
