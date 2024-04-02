import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { FollowButton } from 'src/components/UserComponents/FollowButton'
import { Avatar, Icon } from '@chakra-ui/react'
import { CookieIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

export interface ProfileHeroInfoProps {
  username: string
}

export const ProfileHeroInfo: FC<ProfileHeroInfoProps> = ({ username }) => {
  return (
    <HStack
      position={'relative'}
      mt={'-20px'}
      alignItems={'center'}
      direction="row"
      w="full"
      spacing={4}
    >
      <HStack borderRadius={6} p={1} bg={'panel.background'}>
        <Avatar
          name={username}
          borderRadius={6}
          size={'7'}
          // src="https://cdn.rammble.net/test/sweaty-speedrunner.gif"
        />
      </HStack>
      <VStack mt={1} w="full" align="start" spacing={2}>
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
              <Icon as={CookieIcon} boxSize={5} color={'accent.8'} />
            </HStack>
          </HStack>
          <Text textStyle={'2'} color={'neutral.8a'}>
            @{username}
          </Text>
        </VStack>
      </VStack>
      <HStack w="full" spacing={3} justify="end">
        <IconButton
          variant={'soft'}
          size={'3'}
          p={2}
          aria-label="Go Back"
          icon={<EnvelopeClosedIcon />}
        />
        <FollowButton />
      </HStack>
    </HStack>
  )
}
