import { FC } from 'react'
import { Image } from '@chakra-ui/image'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { EmptyHeartIcon } from 'src/icons/EmptyHeartIcon'
import { EmoteIcon } from 'src/icons/EmoteIcon'

export interface ProfileHeroInfoProps {
  username: string
}

export const ProfileHeroInfo: FC<ProfileHeroInfoProps> = ({ username }) => {
  return (
    <HStack direction="row" w="100%" spacing={4} px={4} mt="-32px">
      <Image
        rounded="32px"
        boxSize="96px"
        src="https://picsum.photos/96"
        boxShadow="0 0 0 6px #121217"
      />
      <VStack w="100%" align="start" spacing={3}>
        <Box w="100%" h="32px" />
        <VStack w="100%" align="start" justify="start" spacing={1}>
          <HStack spacing={2}>
            <Text
              fontSize={24}
              fontWeight={500}
              color="ui.100"
              lineHeight="normal"
            >
              Display Name
            </Text>
            <HStack spacing={1}>
              <EmptyHeartIcon boxSize={6} color="brand" />
              <EmoteIcon boxSize={6} color="brand" />
            </HStack>
          </HStack>
          <Text
            fontSize={16}
            fontWeight={500}
            color="ui.40"
            lineHeight="normal"
          >
            @{username}
          </Text>
        </VStack>
      </VStack>
    </HStack>
  )
}
