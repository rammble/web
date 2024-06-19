'use client'

import React, { FC } from 'react'
import { Box } from '@chakra-ui/layout'
import { ProfileHeroBanner } from 'src/components/client/Profile/ProfileHero/ProfileHeroBanner'
import { ProfileHeroInfo } from 'src/components/client/Profile/ProfileHero/ProfileHeroInfo'
import { User } from '@rammble/sdk'

export interface ProfileHeroProps {
  user?: User
  isLoading?: boolean
}

export const ProfileHero: FC<ProfileHeroProps> = ({ isLoading, user }) => {
  return (
    <Box w={'full'}>
      <ProfileHeroBanner isLoading={isLoading} />
      <ProfileHeroInfo user={user} isLoading={isLoading} />
    </Box>
  )
}
