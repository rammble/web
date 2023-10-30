import { Image } from '@chakra-ui/image'
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/layout'
import Head from 'next/head'
import { lazy, Suspense } from 'react'
import { Footer } from 'src/components/feed/Footer'
import { Header } from 'src/components/feed/Header'
import { EmptyHeartIcon } from 'src/icons/EmptyHeartIcon'
import { RepostIcon } from 'src/icons/RepostIcon'
import { ShareIcon } from 'src/icons/ShareIcon'
import { ThreeDotsIcon } from 'src/icons/ThreeDotsIcon'

const PullToRefresh = lazy(() => import('react-pull-to-refresh'))

const FeedPost = () => (
  <HStack bg="#15151F" w="100%" p={2} spacing={3} align="start">
    <Image rounded="12px" src="https://picsum.photos/48" boxSize="48px" />
    <VStack spacing={4} w="full" align="start">
      <VStack align="start" spacing={1}>
        <VStack align="start" spacing={1}>
          <HStack fontSize={16}>
            <Text fontWeight={500}>Hello world</Text>
            <Text color="ui.40">·</Text>
            <Text color="ui.40">32m</Text>
          </HStack>
          <Text>
            just wanted the latest{' '}
            <Text as="span" color="brand">
              #movie
            </Text>
          </Text>
        </VStack>
        <HStack spacing={3} color="#515E6A">
          <Text>#movie</Text>
          <Text>#idk i didnt watch the movie</Text>
        </HStack>
      </VStack>
      <HStack w="full" justify="space-between">
        <HStack>
          <EmptyHeartIcon boxSize="32px" />
          <Text>41</Text>
        </HStack>
        <HStack spacing={4}>
          <RepostIcon boxSize="32px" />
          <ShareIcon boxSize="32px" />
          <ThreeDotsIcon boxSize="32px" />
        </HStack>
      </HStack>
    </VStack>
  </HStack>
)

export default function Home() {
  const doRefresh = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000))
  }

  return (
    <>
      <Head>
        <title>rammble</title>
      </Head>
      <Header />
      <Box pos="absolute" top="0" bg="bg" zIndex={1} w="full" h="64px" />
      <Suspense fallback={<div>Loading...</div>}>
        <PullToRefresh
          onRefresh={doRefresh}
          style={{ textAlign: 'center' }}
          icon={
            <Box className="genericon genericon-next">
              <Center boxSize="full" transform="rotate(180deg)">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7912 10.995H6.62124L9.50124 8.11499C9.89124 7.72499 9.89124 7.09499 9.50124 6.70499C9.31441 6.51774 9.06076 6.41251 8.79624 6.41251C8.53172 6.41251 8.27807 6.51774 8.09124 6.70499L3.50124 11.295C3.11124 11.685 3.11124 12.315 3.50124 12.705L8.09124 17.295C8.48124 17.685 9.11124 17.685 9.50124 17.295C9.89124 16.905 9.89124 16.275 9.50124 15.885L6.62124 12.995H19.7912C20.3412 12.995 20.7912 12.545 20.7912 11.995C20.7912 11.445 20.3412 10.995 19.7912 10.995Z"
                    fill="white"
                  />
                </svg>
              </Center>
            </Box>
          }
        >
          <VStack w="100%" spacing={1}>
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </VStack>
        </PullToRefresh>
      </Suspense>
      <Footer />
    </>
  )
}
