import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { EmptyHeartIcon } from 'src/icons/EmptyHeartIcon'
import { EmoteIcon } from 'src/icons/EmoteIcon'
import { IconButton } from '@chakra-ui/button'
import { MailIcon } from 'src/icons/MailIcon'
import Image from 'next/image'
import { FollowButton } from 'src/components/UserComponents/FollowButton'

export interface ProfileHeroInfoProps {
  username: string
}

export const ProfileHeroInfo: FC<ProfileHeroInfoProps> = ({ username }) => {
  return (
    <HStack alignItems={'center'} direction="row" w="full" spacing={4}>
      <Image
        alt={`Profile Picture of ${username}`}
        width={96}
        height={96}
        src="https://cdn.rammble.net/test/sweaty-speedrunner.gif"
      />
      <VStack mt={1} w="full" align="start" spacing={3}>
        <VStack w="full" align="start" justify="start" spacing={1}>
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
            fontWeight={400}
            color="ui.40"
            lineHeight="normal"
          >
            @{username}
          </Text>
        </VStack>
      </VStack>
      <HStack w="full" spacing={3} justify="end">
        <IconButton
          p={2}
          rounded="12px"
          aria-label="Go Back"
          bg="gradient.ui.2-5"
          color="ui.90"
          border="1px solid"
          borderColor="ui.20"
          icon={<MailIcon boxSize={6} />}
        />
        <FollowButton />
      </HStack>
    </HStack>
  )
}
