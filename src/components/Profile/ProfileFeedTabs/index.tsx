import React, { FC } from 'react'
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { ProfileMediaTab } from 'src/components/Profile/ProfileFeedTabs/ProfileMediaTab'
import { VStack } from '@chakra-ui/layout'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { FeedPost } from '../../Posts/FeedPost'

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
      <TabPanels>
        <TabPanel>
          <VStack w="full" spacing="2">
            {FakeFeedPosts.map((post, index) => (
              <FeedPost key={index} data={post} isLoading={false} />
            ))}
          </VStack>
        </TabPanel>
        <ProfileMediaTab />
      </TabPanels>
    </Tabs>
  )
}
