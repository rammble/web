import { HStack, Text, VStack } from '@chakra-ui/layout'
import { LinkIcon } from 'src/icons/LinkIcon'
import { CalenderIcon } from 'src/icons/CalenderIcon'
import { FC } from 'react'
import { ProfileSelfPromoBanner } from 'src/components/ProfileHero/ProfileSelfPromoBanner'
export interface ProfileHeroBioAndInfoProps {}

export const ProfileHeroBioAndInfo: FC<ProfileHeroBioAndInfoProps> = ({}) => {
  return (
    <VStack spacing={4}>
      <Text as="p" px={4} fontSize={16} fontWeight={400} lineHeight="normal">
        this is my bio | im a{' '}
        <Text as="span" color="brand">
          #gamer
        </Text>{' '}
        |{' '}
        <Text as="span" color="brand">
          #programmer
        </Text>{' '}
        | guitar player | and more | check out my website{' '}
        <Text as="span" color="brand">
          rammble.net
        </Text>{' '}
        | CEO of{' '}
        <Text as="span" color="brand">
          @GamerCentral
        </Text>
      </Text>
      <HStack
        spacing={4}
        fontSize={14}
        lineHeight="normal"
        fontWeight={400}
        color="ui.40"
        flexGrow={0}
        w="100%"
        px={4}
      >
        <HStack spacing={1} w="50%">
          <LinkIcon boxSize={4} />
          <Text as="span" noOfLines={1} color="brand">
            website.com/username_very_long_url_hahahahahahah
          </Text>
        </HStack>
        <HStack spacing={1} flexShrink={0}>
          <CalenderIcon boxSize={4} />
          <Text as="span">Joined May 2021</Text>
        </HStack>
      </HStack>
      <HStack
        spacing={1}
        fontSize={14}
        lineHeight="normal"
        fontWeight={400}
        color="ui.40"
        flexGrow={0}
        w="100%"
        px={4}
      >
        <ProfileSelfPromoBanner />
      </HStack>
      <HStack
        spacing={4}
        fontSize={16}
        lineHeight="normal"
        fontWeight={400}
        color="ui.40"
        flexGrow={0}
        w="100%"
        px={4}
      >
        <HStack spacing={1}>
          <Text as="span" fontWeight={500} color="ui.100">
            9.42k
          </Text>
          <Text as="span">followers</Text>
        </HStack>
        <HStack spacing={1}>
          <Text as="span" fontWeight={500} color="ui.100">
            1.34m
          </Text>
          <Text as="span">following</Text>
        </HStack>
        <HStack spacing={1}>
          <Text as="span" fontWeight={500} color="ui.100">
            130
          </Text>
          <Text as="span">rambles</Text>
        </HStack>
      </HStack>
    </VStack>
  )
}
