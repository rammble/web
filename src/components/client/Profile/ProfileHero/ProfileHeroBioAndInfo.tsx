'use client'

import { HStack, Text, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { ProfileStat } from 'src/components/client/Profile/ProfileHero/ProfileStat'
import { SkeletonText } from '@chakra-ui/skeleton'
import { Skeleton } from '@chakra-ui/react'

export interface ProfileHeroBioAndInfoProps {
  isLoading?: boolean
}

export const ProfileHeroBioAndInfo: FC<ProfileHeroBioAndInfoProps> = ({
  isLoading,
}) => (
  <VStack spacing={4} w="full">
    <SkeletonText isLoaded={!isLoading} w="full" noOfLines={3}>
      this is my bio | im a #gamer | #programmer | guitar player | and more |
      check out my website rammble.net | CEO of @GamerCentral
    </SkeletonText>
    <Skeleton w="full" isLoaded={!isLoading}>
      <HStack alignItems={'flex-start'} w={'full'} spacing={5}>
        <ProfileStat title={'followers'} value={15240} />
        <ProfileStat title={'following'} value={850} />
        <ProfileStat title={'rammbles'} value={2501} />
      </HStack>
    </Skeleton>
  </VStack>
)
