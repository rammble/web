import { FC } from 'react'
import { useHighlight, Text } from '@chakra-ui/react'
import { Box, Flex, Heading, HStack } from '@chakra-ui/layout'

export interface FeedTextProps {
  text: string
}
export const FeedText: FC<FeedTextProps> = ({ text }) => {
  const chunks = text.split(' ')

  const elements = chunks.map((t, i) => {
    if (t.startsWith('#') || t.startsWith('@')) {
      return (
        <Text cursor={'pointer'} key={i} color={'brand'}>
          {t}
        </Text>
      )
    } else {
      return (
        <Text key={i} color={'ui'}>
          {t}
        </Text>
      )
    }
  })

  return (
    <Box display={'flex'} flexWrap={'wrap'} gap={1}>
      {elements}
    </Box>
  )
}
