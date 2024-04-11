'use client'
import { Center, Flex, Heading } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { Navigation } from 'src/components/client/Navigation'
import { SettingsLayout } from 'src/layouts/SettingsLayout'
import { useRouter, useSearchParams } from 'next/navigation'
import { SettingNavButtons } from 'src/components/client/Settings/SettingNavigationButtons'
import { IconButton } from '@chakra-ui/button'
import { Divider, Icon } from '@chakra-ui/react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

interface SubPageProps {
  params: {
    category: string
    subPage: string
  }
}

const Page: FC<SubPageProps> = ({ params }) => {
  const router = useRouter()

  const { category, subPage } = params

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
            icon={<Icon as={ArrowLeftIcon} boxSize={8} />}
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

export default Page
