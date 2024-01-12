import { MainLayout } from 'src/layouts/MainLayout'
import { Navigation } from 'src/components/Navigation'
import { CreatePost } from 'src/components/CreatePost'
import { VStack } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/react'
import { FeedPost } from 'src/components/FeedPost'
import { NextPage } from 'next'
import { useSelf } from 'src/hooks/useSelf'

const FeedPage: NextPage = () => {
  const [me] = useSelf<true>()

  return (
    <MainLayout
      isFeed
      renderRightNode={() => <Navigation />}
      renderChatNode={() => null}
    >
      <VStack w="full" gap={2}>
        <CreatePost />
        <Divider height={'1px'} mt={4} mb={2} bg={'blurp.lighter'} />
        {me?.posts?.map((post) => <FeedPost key={post.id} data={post} />)}
      </VStack>
    </MainLayout>
  )
}

export default FeedPage
