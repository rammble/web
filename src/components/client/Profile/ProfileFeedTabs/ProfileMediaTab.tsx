import React, { FC } from 'react'
import { TabPanel } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/layout'
import { FakeMediaPosts } from 'src/utils/placeholder.data'
import { MediaPost } from 'src/components/client/Posts/MediaPost'

export interface ProfileMediaTabProps {}

// <Box w={'full'} mx="auto" sx={{ columnCount: [1, 2], columnGap: 1 }}> for media column layout
export const ProfileMediaTab: FC<ProfileMediaTabProps> = () => {
  return (
    <TabPanel>
      <VStack w={'full'}>
        {FakeMediaPosts.map((post, index) => {
          return <MediaPost key={index} data={post} />
        })}
      </VStack>
    </TabPanel>
  )
}
