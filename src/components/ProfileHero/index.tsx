import React, { FC } from 'react'
import { Box, Text, VStack } from '@chakra-ui/layout'
import { ProfileHeroBanner } from 'src/components/ProfileHero/ProfileHeroBanner'
import { ProfileHeroInfo } from 'src/components/ProfileHero/ProfileHeroInfo'
import { ProfileHeroBioAndInfo } from 'src/components/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/ProfileFeedTabs'

export interface ProfileHeroProps {
  username: string
}

export const ProfileHero: FC<ProfileHeroProps> = ({ username }) => {
  return (
    <Box w={'full'}>
      <ProfileHeroBanner />
      <ProfileHeroInfo username={username} />
    </Box>
  )
}
