import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export interface InboxPreviewItemProps {}

export const InboxPreviewItem: FC<InboxPreviewItemProps> = ({}) => (
  <HStack w="full" p={2} spacing={4} rounded="8px">
    <Image src="https://picsum.photos/56?1" boxSize="44px" rounded="12px" />
    <VStack align="start" spacing={1}>
      <HStack color="ui.40" lineHeight="19px">
        <Text color="ui" fontWeight={700}>
          Synqat
        </Text>
        <Text>·</Text>
        <Text>5m</Text>
      </HStack>
      <Text color="ui.60" lineHeight="19px" noOfLines={1}>
        You: well if you weren’t being such an asshole dude.
      </Text>
    </VStack>
  </HStack>
)
