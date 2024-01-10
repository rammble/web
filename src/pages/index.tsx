import { MainLayout } from 'src/layouts/MainLayout'
import { Navigation } from 'src/components/Navigation'
import { CreatePost } from 'src/components/CreatePost'
import { Box, VStack } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/react'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { FeedPost } from 'src/components/FeedPost'
import { NextPage } from 'next'

const FeedPage: NextPage = () => {
  return (
    <MainLayout
      isFeed
      renderRightNode={() => <Navigation />}
      renderChatNode={() => null}
    >
      <VStack w="full" gap={2}>
        <CreatePost />
        <Divider height={'1px'} mt={4} mb={2} bg={'blurp.lighter'} />
        {FakeFeedPosts.map((p, i) => {
          return <FeedPost key={i} data={p} />
        })}
      </VStack>
    </MainLayout>
  )
}

export default FeedPage
