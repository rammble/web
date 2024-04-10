'use client'

import { HStack, Text, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { ProfileStat } from 'src/components/client/Profile/ProfileHero/ProfileStat'

export interface ProfileHeroBioAndInfoProps {}

export const ProfileHeroBioAndInfo: FC<ProfileHeroBioAndInfoProps> = ({}) => {
  return (
    <VStack spacing={4}>
      <Text>
        this is my bio | im a #gamer | #programmer | guitar player | and more |
        check out my website rammble.net | CEO of @GamerCentral
      </Text>
      <HStack alignItems={'flex-start'} w={'full'} spacing={5}>
        <ProfileStat title={'followers'} value={15240} />
        <ProfileStat title={'following'} value={850} />
        <ProfileStat title={'rammbles'} value={2501} />
      </HStack>
    </VStack>
  )
}
