import { Heading, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { ContentCategory } from 'src/components/ContentCategory'
import { InboxPreviewItem } from 'src/components/InboxPreviewItem'

const Messages: FC = () => (
  <VStack px={4} pt={2} pb={4} w="100%" align="start" spacing={6}>
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
)

export default Messages
