import { FC, useState } from 'react'
import { MotionBox, transitions } from 'src/components/motion'
import { Box, Heading, Text, VStack, Wrap } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { SearchIcon } from 'src/icons/SearchIcon'
import { CloseIcon } from 'src/icons/CloseIcon'
import { IconButton } from '@chakra-ui/button'
import { ContentCategory } from 'src/components/ContentCategory'
import { FeedPost } from 'src/components/FeedPost'
import { AvatarCarousel } from 'src/components/AvatarCarousel'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { Navigation } from 'src/components/Navigation'
import { MainLayout } from 'src/layouts/MainLayout'

const ExplorePage: FC = () => {
  const [query, setQuery] = useState<string>('')

  const isEmpty = query.length === 0

  return (
    <MainLayout
      renderChatNode={() => null}
      renderRightNode={() => <Navigation />}
    >
      <VStack px={4} pt={2} pb={4} w="full" align="start" spacing={6}>
        <Heading as="h2" color="brand" fontSize={24} fontWeight={500}>
          Search
        </Heading>
        <Box rounded="8px" bg="#15151F" w="full" pos="relative">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            display="flex"
            type="text"
            placeholder="Search people, posts, or hashtags..."
            h="56px"
            w="full"
            bg="transparent"
            pl={5}
            pr={14}
          />
          <MotionBox
            pos="absolute"
            p={4}
            top={0}
            right={0}
            pointerEvents="none"
            transition={transitions.fast}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: isEmpty ? 1 : 0, scale: isEmpty ? 1 : 0.6 }}
          >
            <SearchIcon boxSize="24px" />
          </MotionBox>
          <MotionBox
            pos="absolute"
            p={2}
            top={0}
            right={0}
            transition={transitions.fast}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: isEmpty ? 0 : 1,
              scale: isEmpty ? 0.6 : 1,
              pointerEvents: isEmpty ? 'none' : 'auto',
            }}
          >
            <IconButton
              onClick={() => setQuery('')}
              aria-label="Clear search"
              p={2}
              rounded="full"
              _active={{
                bg: 'ui.3',
              }}
              icon={<CloseIcon boxSize="24px" />}
            />
          </MotionBox>
        </Box>
        <ContentCategory title="People">
          <AvatarCarousel />
        </ContentCategory>
        <ContentCategory title="Hashtags">
          <Wrap
            spacingX={2}
            spacingY={1}
            color="ui.faded"
            fontSize={16}
            lineHeight="19px"
            fontWeight={400}
          >
            <Text as="span" color="brand">
              #ai
            </Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
            <Text as="span">#memes</Text>
            <Text as="span">#joe</Text>
          </Wrap>
        </ContentCategory>
        <ContentCategory title="Posts">
          <VStack w="full" spacing={1} overflow="hidden">
            {FakeFeedPosts.map((d, i) => {
              return <FeedPost key={i} data={d} />
            })}
          </VStack>
        </ContentCategory>
      </VStack>
    </MainLayout>
  )
}

export default ExplorePage
