import { Heading, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { AvatarCarousel } from 'src/components/AvatarCarousel'
import { ContentCategory } from 'src/components/ContentCategory'
import { FeedPost } from 'src/components/FeedPost'
import { FakeFeedPosts } from 'src/utils/placeholder.data'

const Friends: FC = () => (
  <VStack px={4} pt={2} pb={4} w="100%" align="start" spacing={6}>
    <Heading as="h2" color="brand" fontSize={24} fontWeight={500}>
      Friends
    </Heading>
    <AvatarCarousel />
    <ContentCategory title="Suggestions">
      <AvatarCarousel />
    </ContentCategory>
    <ContentCategory title="Recent Activity">
      <VStack w="100%" spacing={1} overflow="hidden">
        {FakeFeedPosts.map((d, i) => {
          return <FeedPost key={i} data={d} />
        })}
      </VStack>
    </ContentCategory>
  </VStack>
)

export default Friends
