import { NextPage } from 'next'
import { Center } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/react'
import { Navigation } from 'src/components/Navigation'
import React from 'react'
import { MainLayout } from 'src/layouts/MainLayout'

export const NotFoundPage: NextPage = () => {
  return (
    <MainLayout
      renderChatNode={() => null}
      renderRightNode={() => <Navigation />}
    >
      <Center boxSize="full">
        <Tag padding={5}>404</Tag>
      </Center>
    </MainLayout>
  )
}

export default NotFoundPage
