import { FC } from 'react'
import { MotionBox, MotionStack, transitions } from 'src/components/motion'
import { Box, Heading, Text, VStack, Wrap } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { SearchIcon } from 'src/icons/SearchIcon'
import { IconButton } from '@chakra-ui/button'
import { CloseIcon } from 'src/icons/CloseIcon'
import { ContentCategory } from 'src/components/ContentCategory'
import { AvatarCarousel } from 'src/components/AvatarCarousel'
import { FeedPost } from 'src/components/FeedPost'
import { FakeFeedPosts } from './index'

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
