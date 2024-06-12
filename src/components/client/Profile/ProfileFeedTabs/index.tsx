'use client'

import React, { FC } from 'react'
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { ProfileMediaTab } from 'src/components/client/Profile/ProfileFeedTabs/ProfileMediaTab'
import { VStack } from '@chakra-ui/layout'
import { FeedPost } from '../../Posts/FeedPost'
import { GetUserByUsernameQuery } from '@rammble/sdk'

export interface ProfileFeedTabsProps {
  isLoading?: boolean
  posts?: Array<
    GetUserByUsernameQuery['user']['posts'][number] & {
      poster: Omit<GetUserByUsernameQuery['user'], 'posts'>
    }
  >
}

export const ProfileFeedTabs: FC<ProfileFeedTabsProps> = ({
  posts,
  isLoading,
}) => {
  return (
    <Tabs gap="8" size="2">
      <TabList>
        <Tab>Rammbles</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </TabList>
      <TabIndicator />
      <TabPanels>
        <TabPanel>
          <VStack w="full" spacing="2">
            {posts?.map((post, index) => (
              <FeedPost key={index} data={post} isLoading={isLoading} />
            ))}
          </VStack>
        </TabPanel>
        <ProfileMediaTab />
        <TabPanel>
          <VStack w="full" spacing="2"></VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
