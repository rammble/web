import { PropsWithChildren } from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'

export type LeftSideWidget = PropsWithChildren<{
  title: string
}> &
  (
    | {
        hasInfo: true
        infoUrl: string
      }
    | {
        hasInfo?: false | undefined
        infoUrl?: never
      }
  )

export const LeftSideWidget = ({
  title,
  children,
  hasInfo,
  infoUrl,
}: LeftSideWidget) => {
  return (
    <VStack w="full" bg="panel.default" rounded="4" p="3" align="start">
      <HStack w="full" justify="space-between">
        <Text textStyle="2" fontWeight="bold" color="accent.9">
          {title}
        </Text>
        <Box>
          {hasInfo && (
            <Icon as={QuestionMarkCircledIcon} boxSize="4" color="info.7a" />
          )}
        </Box>
      </HStack>
      {children}
    </VStack>
  )
}
