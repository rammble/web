'use client'

import React, { FC } from 'react'
import { Box } from '@chakra-ui/layout'
import { ProfileHeroBanner } from 'src/components/client/Profile/ProfileHero/ProfileHeroBanner'
import { ProfileHeroInfo } from 'src/components/client/Profile/ProfileHero/ProfileHeroInfo'

export interface ProfileHeroProps {
  username?: string
  displayName?: string
  avatarUrl?: string | null
  isLoading?: boolean
}

export const ProfileHero: FC<ProfileHeroProps> = ({
  isLoading,
  username,
  avatarUrl,
  displayName,
}) => {
  return (
    <Box w={'full'}>
      <ProfileHeroBanner isLoading={isLoading} />
      <ProfileHeroInfo
        isLoading={isLoading}
        username={username}
        displayName={displayName}
        avatarUrl={avatarUrl}
      />
    </Box>
  )
}
