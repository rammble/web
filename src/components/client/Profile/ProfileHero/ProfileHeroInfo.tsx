'use client'

import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { FollowButton } from 'src/components/client/Profile/ProfileHero/FollowButton'
import { Avatar, Skeleton } from '@chakra-ui/react'
import {
  CookieIcon,
  DrawingPinIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import { ProfileBadge } from 'src/components/client/Profile/ProfileHero/ProfileBadge'
import { SkeletonText } from '@chakra-ui/skeleton'

export interface ProfileHeroInfoProps {
  username?: string
  displayName?: string
  avatarUrl?: string | null
  isLoading?: boolean
}

export const ProfileHeroInfo: FC<ProfileHeroInfoProps> = ({
  username,
  displayName,
  avatarUrl,
  isLoading,
}) => {
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
        <Skeleton isLoaded={!isLoading} boxSize="96px" borderRadius={6}>
          <Avatar
            name={username}
            borderRadius={6}
            size={'7'}
            src={avatarUrl ?? undefined}
          />
        </Skeleton>
      </HStack>
      <VStack mt={1} w="full" align="start" spacing={2}>
        <VStack w="full" align="start" justify="start" spacing={1}>
          <HStack spacing={2}>
            <SkeletonText
              minW="80px"
              isLoaded={!isLoading}
              noOfLines={1}
              fontSize={24}
              fontWeight={500}
              color="ui.100"
              lineHeight="normal"
            >
              {displayName}
            </SkeletonText>
            <Skeleton isLoaded={!isLoading}>
              <HStack spacing={1}>
                <ProfileBadge title={'Some kind of badge'} icon={CookieIcon} />
                <ProfileBadge
                  title={'Professional Rammbler'}
                  icon={DrawingPinIcon}
                />
              </HStack>
            </Skeleton>
          </HStack>
          <SkeletonText
            minW="60px"
            noOfLines={1}
            isLoaded={!isLoading}
            textStyle={'2'}
            color={'neutral.8a'}
          >
            @{username}
          </SkeletonText>
        </VStack>
      </VStack>
      <Skeleton isLoaded={!isLoading}>
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
      </Skeleton>
    </HStack>
  )
}
