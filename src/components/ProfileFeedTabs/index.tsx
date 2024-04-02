import React, { FC } from 'react'
import { Button } from '@chakra-ui/button'
import { HStack, VStack } from '@chakra-ui/layout'
import {
  Divider,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { CreatePost } from 'src/components/CreatePost'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { FeedPost } from 'src/components/FeedPost'

export interface ProfileFeedTabsProps {}

export const ProfileFeedTabs: FC<ProfileFeedTabsProps> = () => {
  return (
    <Tabs gap="8" size="2">
      <TabList>
        <Tab>Rammbles</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
        <Tab>Commissions</Tab>
      </TabList>
      <TabIndicator />
      <TabPanels></TabPanels>
    </Tabs>
  )
}
