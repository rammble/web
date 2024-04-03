import React, { FC } from 'react'
import {
  Avatar,
  Grid,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { Box, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/layout'
import { FakeMediaPosts } from 'src/utils/placeholder.data'
import { MediaPost } from 'src/components/Posts/MediaPost'

export interface ProfileMediaTabProps {}

// <Box w={'full'} mx="auto" sx={{ columnCount: [1, 2], columnGap: 1 }}> for media column layout
export const ProfileMediaTab: FC<ProfileMediaTabProps> = () => {
  return (
    <TabPanel>
      <VStack w={'full'}>
        {FakeMediaPosts.map((post, index) => {
          return <MediaPost data={post} />
        })}
      </VStack>
    </TabPanel>
  )
}
