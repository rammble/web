import { MainLayout } from 'src/layouts/MainLayout'
import { Navigation } from 'src/components/Navigation'
import { CreatePost } from 'src/components/CreatePost'
import { VStack } from '@chakra-ui/layout'
import {
  Divider,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { FeedPost } from '../components/Posts/FeedPost'
import { NextPage } from 'next'
import { useSelf } from 'src/hooks/useSelf'
import React from 'react'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { LeftSideContent } from 'src/components/LeftSideContent'

const FeedPage: NextPage = () => {
  const [me] = useSelf<true>()

  return (
    <MainLayout
      isFeed
      renderLeftNode={() => <LeftSideContent />}
      renderRightNode={() => <Navigation />}
      renderChatNode={() => null}
    >
      <VStack w="full" spacing={2} py="6">
        <Tabs gap="8" size="2">
          <TabList>
            <Tab>Feed</Tab>
            <Tab>Trending</Tab>
            <Tab>Media</Tab>
          </TabList>
          <TabIndicator />
          <TabPanels>
            <VStack as={TabPanel} spacing="4">
              <CreatePost />
              <Divider height={'1px'} mt={4} mb={2} bg="neutral.3a" />
              <VStack w="full" spacing="2">
                {FakeFeedPosts.map((post, index) => (
                  <FeedPost key={index} data={post} isLoading={false} />
                ))}
              </VStack>
            </VStack>
          </TabPanels>
        </Tabs>
      </VStack>
    </MainLayout>
  )
}

export default FeedPage
