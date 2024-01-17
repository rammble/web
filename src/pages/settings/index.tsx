import { Center, VStack } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { MainLayout } from 'src/layouts/MainLayout'
import { Navigation } from 'src/components/Navigation'
import { NotificationIcon } from 'src/icons/NotificationIcon'
import { FilledHeartIcon } from 'src/icons/FilledHeartIcon'
import { SettingsButton } from 'src/pages/settings/SettingsButton'
import { Input } from '@chakra-ui/input'
import { UserIcon } from 'src/icons/UserIcon'
import { LockIcon } from 'src/icons/LockIcon'
import { ShieldTickIcon } from 'src/icons/ShieldTickIcon'
import { AccessibilityIcon } from 'src/icons/AccessibilityIcon'
import { SettingsSubPage } from 'src/components/Settings/SettingsSubPage'
import { FakeFeedPosts } from 'src/utils/placeholder.data'

const pages = [
  {
    title: 'Your account',
    description:
      'See information about your account, change your username or disable your account.',
    path: '/settings',
    icon: <UserIcon />,
  },
  {
    title: 'Security and account access',
    description:
      'Manage your account’s security and keep track of your login and usage.',
    path: '/settings/security',
    icon: <LockIcon />,
  },
  {
    title: 'Premium',
    description:
      'Support Rammble as we try and build the best social platform yet to be.',
    path: '/settings/premium',
    icon: <FilledHeartIcon />,
  },
  {
    title: 'Privacy and Safety',
    description: 'Manage what information is shared to others on Rammble.',
    path: '/settings/privacy',
    icon: <ShieldTickIcon />,
  },
  {
    title: 'notifications',
    description:
      'Select the kinds of notifications you get about your activities, interests and recommendations.',
    path: '/settings/notifications',
    icon: <NotificationIcon />,
  },
  {
    title: 'Accessibility, display and languages',
    description: 'Manage how Rammble content is displayed to you',
    path: '/settings/accessibility',
    icon: <AccessibilityIcon />,
  },
]

const SettingsPage: FC = () => {
  const SettingsButtons = () => {
    return (
      <VStack gap={2}>
        <Input placeholder={'Search settings...'} border={'input'} />
        {pages.map((p, i) => {
          return <SettingsButton key={i} page={p} />
        })}
      </VStack>
    )
  }

  return (
    <MainLayout
      renderLeftNode={() => <SettingsButtons />}
      renderChatNode={() => null}
      renderRightNode={() => <Navigation />}
    >
      <Center boxSize="full">
        <SettingsSubPage
          header={'Your account'}
          user={FakeFeedPosts[0].user}
          description={
            'See information about your account, change your username or disable your account.'
          }
        />
      </Center>
    </MainLayout>
  )
}

export default SettingsPage
