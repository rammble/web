import { Flex, Text } from '@chakra-ui/layout'
import PasswordStrengthService from 'src/services/PasswordStrengthService'

const values = {
  'very strong': 'accent.green',
  strong: 'accent.green',
  medium: 'accent.yellow',
  weak: 'accent.red',
  'too weak': 'accent.red',
}

export default function PasswordStrength({ text }: { text: string }) {
  const strength = PasswordStrengthService.check(text, 4, 128)

  return (
    <Flex gap={1} fontSize={'14px'} fontWeight={400}>
      <Text color={'ui.40'}>Strength:</Text>
      <Text color={values[strength?.toLowerCase() as keyof typeof values]}>
        {strength || 'Too weak'}
      </Text>
    </Flex>
  )
}
