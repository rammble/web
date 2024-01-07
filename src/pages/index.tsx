import { VStack } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/react'
import { FC } from 'react'
import { CreatePost } from 'src/components/CreatePost'
import { FeedPost } from 'src/components/FeedPost'
import { MotionCenter } from 'src/components/motion'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { LoadingIndicator } from 'src/components/LoadingIndicator'

export interface PostImageProps {
  url: string
}

export interface UserProps {
  username: string
  displayName: string
  avatarURL?: string
}

export interface FeedProps {
  user: UserProps
  post: {
    text: string
    likes: number
    postedAt: string
    images: PostImageProps[]
    tags: string[]
    isPinned?: boolean
  }
}

const LoaderPlaceholderPage = () => (
  <MotionCenter
    h="calc(100vh - 128px)"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.4,
    }}
  >
    <LoadingIndicator />
  </MotionCenter>
)

const FeedPage: FC = () => (
  <>
    <CreatePost />
    <VStack w="full" gap={2}>
      <Divider height={'1px'} mt={4} mb={2} bg={'blurp.lighter'} />
      {FakeFeedPosts.map((p, i) => {
        return <FeedPost key={i} data={p} />
      })}
    </VStack>
  </>
)

export default FeedPage
