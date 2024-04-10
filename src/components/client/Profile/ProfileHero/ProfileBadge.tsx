'use client'
import { FC } from 'react'
import { Icon, Tooltip } from '@chakra-ui/react'

export interface ProfileBadgeProps {
  title: string
  icon: any
}

export const ProfileBadge: FC<ProfileBadgeProps> = ({ title, icon }) => {
  return (
    <Tooltip
      label={title}
      hasArrow
      bg={'panel.background'}
      borderRadius={2}
      p={1}
    >
      <Icon as={icon} boxSize={5} color={'accent.8'} />
    </Tooltip>
  )
}
