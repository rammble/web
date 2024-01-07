import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import PasswordStrength from 'src/components/AuthLayout/PasswordStrength'
import { Tooltip } from '@chakra-ui/react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { ISignUpField } from 'src/pages/signup'

export interface InputFieldProps {
  register: UseFormRegister<FieldValues>
  field: ISignUpField
  watchValue: string
  errors?: {
    message?: string
  }
}

export const InputField: FC<InputFieldProps> = ({
  register,
  field,
  watchValue,
  errors,
}) => {
  return (
    <Box w={'100%'}>
      <Flex>
        <Tooltip hasArrow label={'Haha'}>
          <Text color={'ui.80'}>{field?.title}</Text>
        </Tooltip>
      </Flex>
      <Input
        type={field.type || 'text'}
        w={'100%'}
        gap={8}
        alignSelf={'stretch'}
        p={'12px 20px'}
        borderRadius={2}
        border={'2px solid var(--Dark-UI-10, rgba(246, 250, 255, 0.10))'}
        color={'ui.20'}
        bg={'ui.5'}
        placeholder={field.title}
        {...register(field.title, field.validations)}
      />
      <Flex justifyContent={'space-between'}>
        <Text color={'accent.red'} fontSize={'14px'} fontWeight={400}>
          {errors?.message}
        </Text>
        <Box h={'18px'}>
          {field.options?.hasPasswordStrength && (
            <PasswordStrength text={watchValue} />
          )}
          {field.options?.hasLengthCounter && (
            <Text
              fontSize={'14px'}
              fontWeight={400}
              color={
                field.maxLength && watchValue?.length > field?.maxLength
                  ? 'accent.red'
                  : 'ui.20'
              }
            >
              {watchValue?.length || 0}/{field?.maxLength || 0}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
