import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export interface NotificationItemProps {}

export const NotificationItem: FC<NotificationItemProps> = ({}) => (
  <HStack w="full" p={2} bg="#15151F" rounded="8px">
    <Image src="https://picsum.photos/56?1" boxSize="48px" rounded="12px" />
    <VStack align="start" spacing={1}>
      <HStack color="ui.40" lineHeight="19px">
        <Text color="ui" fontWeight={700}>
          Synqat
        </Text>
        <Text>·</Text>
        <Text>5m</Text>
      </HStack>
      <Text color="ui.60" lineHeight="19px">
        tagged you in{' '}
        <Text as="span" color="brand">
          We live in a society
        </Text>
      </Text>
    </VStack>
  </HStack>
)
