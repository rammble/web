import { Center, Flex, Heading } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { Navigation } from 'src/components/Navigation'
import { SettingsLayout } from 'src/layouts/SettingsLayout'
import { useRouter } from 'next/router'
import { SettingNavButtons } from 'src/components/Settings/SettingNavigationButtons'
import { IconButton } from '@chakra-ui/button'
import { LeftArrowIcon } from 'src/icons/LeftArrowIcon'
import { Divider } from '@chakra-ui/react'

const SettingsPage: FC = () => {
  const router = useRouter()

  const { category, subPage } = router.query

  return (
    <SettingsLayout
      renderLeftNode={() => <SettingNavButtons />}
      renderChatNode={() => null}
      renderRightNode={() => <Navigation />}
    >
      <Flex flexDir={'column'} gap={4}>
        <Flex w={'full'} alignItems={'center'} gap={4}>
          <IconButton
            aria-label={'Go Back'}
            onClick={() => router.push(`/settings/${category}`)}
            icon={<LeftArrowIcon boxSize={8} />}
          />
          <Heading color={'ui.100'} fontSize={'16px'} fontWeight={500}>
            {subPage || 'Unknown'}
          </Heading>
        </Flex>
        <Divider borderColor={'ui.20'} w={'full'} />
        <Center boxSize="full"></Center>
      </Flex>
    </SettingsLayout>
  )
}

export default SettingsPage
