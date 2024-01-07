import { Heading, VStack } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { ContentCategory } from 'src/components/ContentCategory'
import { FakeNotifications } from 'src/utils/placeholder.data'
import styled from '@emotion/styled'
import { NotificationItem } from 'src/components/NotificationItem'

const Category = styled(ContentCategory)`
  display: ${(props) =>
    React.Children.count(props.children) === 0 ? 'block' : 'initial'};
`
const Notifications: FC = () => (
  <VStack px={4} pt={4} pb={4} w="100%" align="start" spacing={6}>
    <Heading as="h2" color="brand" fontSize={24} fontWeight={500}>
      Notifications
    </Heading>
    <Category title="Unread">
      <VStack w="full" spacing={1} overflow="hidden">
        {FakeNotifications.map((d, i) => {
          if (d.read) return null
          return <NotificationItem key={i} {...d} />
        })}
      </VStack>
    </Category>
    <Category title="Recent">
      <VStack w="full" spacing={1} overflow="hidden">
        {FakeNotifications.map((d, i) => {
          if (!d.read) return null
          return <NotificationItem key={i} {...d} />
        })}
      </VStack>
    </Category>
  </VStack>
)

export default Notifications
