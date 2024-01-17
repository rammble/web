import React, { FC } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { SettingsButton } from 'src/pages/settings/SettingsButton'
import { UserIcon } from 'src/icons/UserIcon'
import { LockIcon } from 'src/icons/LockIcon'
import { FilledHeartIcon } from 'src/icons/FilledHeartIcon'

export interface SettingsSubPageProps {
  header: string
  description: string
  user?: any
}

export const SettingsSubPage: FC<SettingsSubPageProps> = ({
  header,
  description,
  user,
}) => {
  return (
    <Box>
      <Box>
        <Heading fontSize={'16px'}>{header}</Heading>
        <Text color={'ui.40'} fontWeight={500}>
          @{user?.username}
        </Text>
        <Text color={'ui.40'} fontWeight={400}>
          {description}
        </Text>
      </Box>

      <VStack>
        <SettingsButton
          page={{
            title: 'Account information',
            description:
              'See your account information like your phone number and email address.',
            path: '/settings',
            icon: <UserIcon />,
          }}
        />
        <SettingsButton
          page={{
            title: 'Security and account access',
            description:
              'Manage your account’s security and keep track of your login and usage.',
            path: '/settings/security',
            icon: <LockIcon />,
          }}
        />
        <SettingsButton
          page={{
            title: 'Premium',
            description:
              'Support Rammble as we try and build the best social platform yet to be.',
            path: '/settings/premium',
            icon: <FilledHeartIcon />,
          }}
        />
      </VStack>
    </Box>
  )
}
