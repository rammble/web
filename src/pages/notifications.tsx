import Head from 'next/head'
import { FeedFooter } from 'src/components/feed/FeedFooter'
import { FeedHeader } from 'src/components/feed/FeedHeader'

export default function NotificationsPage() {
  return (
    <>
      <Head>
        <title>rammble</title>
      </Head>
      <FeedHeader />
      <FeedFooter />
    </>
  )
}
