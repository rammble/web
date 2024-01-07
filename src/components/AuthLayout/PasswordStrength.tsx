import { Flex, Text } from '@chakra-ui/layout'
import { FirstOption, Option, passwordStrength } from 'check-password-strength'

const values = {
  strong: 'accent.green',
  medium: 'accent.yellow',
  weak: 'accent.red',
  'too weak': 'accent.red',
}

const firstOption: FirstOption<string> = {
  id: 0,
  value: 'Too weak',
  minDiversity: 0,
  minLength: 0,
}

const passwordOptions: Option<string>[] = [
  {
    id: 1,
    value: 'Weak',
    minDiversity: 1,
    minLength: 4,
  },
  {
    id: 2,
    value: 'Medium',
    minDiversity: 2,
    minLength: 6,
  },
  {
    id: 3,
    value: 'Strong',
    minDiversity: 3,
    minLength: 8,
  },
]

export default function PasswordStrength({ text }: { text: string }) {
  const strength = passwordStrength(text, [firstOption, ...passwordOptions])

  return (
    <Flex gap={1} fontSize={'14px'} fontWeight={400}>
      <Text color={'ui.40'}>Strength:</Text>
      <Text
        color={values[strength?.value?.toLowerCase() as keyof typeof values]}
      >
        {strength?.value || 'Too weak'}
      </Text>
    </Flex>
  )
}
