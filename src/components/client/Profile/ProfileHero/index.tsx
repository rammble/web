'use client'

import React, { FC } from 'react'
import { Box } from '@chakra-ui/layout'
import { ProfileHeroBanner } from 'src/components/client/Profile/ProfileHero/ProfileHeroBanner'
import { ProfileHeroInfo } from 'src/components/client/Profile/ProfileHero/ProfileHeroInfo'

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
