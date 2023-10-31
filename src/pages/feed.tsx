import { VStack } from '@chakra-ui/layout'
import Head from 'next/head'
import { Suspense } from 'react'
import { FeedFooter } from 'src/components/feed/FeedFooter'
import { FeedHeader } from 'src/components/feed/FeedHeader'
import { FeedPost } from 'src/components/feed/FeedPost'

export default function FeedPage() {
  return (
    <>
      <Head>
        <title>rammble</title>
      </Head>
      <FeedHeader />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <FeedFooter hasInput />
    </>
  )
}
