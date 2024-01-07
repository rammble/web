import { Heading, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { ContentCategory } from 'src/components/ContentCategory'
import { NotificationItem } from 'src/components/NotificationItem'

const Notifications: FC = () => (
  <VStack px={4} pt={2} pb={4} w="full" align="start" spacing={6}>
    <Heading as="h2" color="brand" fontSize={24} fontWeight={500}>
      Notifications
    </Heading>
    <ContentCategory title="Unread">
      <VStack w="full" spacing={1} overflow="hidden">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </VStack>
    </ContentCategory>
    <ContentCategory title="Recent">
      <VStack w="full" spacing={1} overflow="hidden">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </VStack>
    </ContentCategory>
  </VStack>
)

export default Notifications
