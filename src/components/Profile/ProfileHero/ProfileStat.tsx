import { HStack, Text, VStack } from '@chakra-ui/layout'
import { FC } from 'react'

export interface ProfileStatProps {
  title: string
  value: number
}

export const ProfileStat: FC<ProfileStatProps> = ({ title, value }) => {
  return (
    <HStack>
      <Text textStyle={'3'}>{value.toLocaleString()}</Text>
      <Text textStyle={'3'} color={'neutral.10a'}>
        {title}
      </Text>
    </HStack>
  )
}
