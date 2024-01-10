import { Heading, VStack } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { ContentCategory } from 'src/components/ContentCategory'
import { InboxPreviewItem } from 'src/components/InboxPreviewItem'
import {Navigation} from "src/components/Navigation";
import { MainLayout } from 'src/layouts/MainLayout'

const Messages: FC = () => (
    <MainLayout
        renderChatNode={() => null}
        renderRightNode={() => <Navigation />}
    >
  <VStack px={4} pt={2} pb={4} w="full" align="start" spacing={6}>
    <Heading as="h2" color="brand" fontSize={24} fontWeight={500}>
      Inbox
    </Heading>
    <ContentCategory title="Unread">
      <VStack w="full" spacing={0} overflow="hidden">
        <InboxPreviewItem />
        <InboxPreviewItem />
        <InboxPreviewItem />
        <InboxPreviewItem />
      </VStack>
    </ContentCategory>
    <ContentCategory title="Recent">
      <VStack w="full" spacing={0} overflow="hidden">
        <InboxPreviewItem />
        <InboxPreviewItem />
        <InboxPreviewItem />
        <InboxPreviewItem />
        <InboxPreviewItem />
      </VStack>
    </ContentCategory>
  </VStack>
    </MainLayout>
)

export default Messages
