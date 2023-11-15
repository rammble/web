import { Meta } from 'src/components/meta'
import { Layout } from 'src/layouts/Layout'
import { VStack } from '@chakra-ui/layout'
import { SPAPage, usePage } from 'src/store/page.store'
import { lazy, Suspense } from 'react'
import { LoadingIndicator } from 'src/components/LoadingIndicator'
import { MotionCenter } from 'src/components/motion'
import { NextPage } from 'next'

const FeedPage = lazy(() => import('src/pages/FeedPage'))
const SearchPage = lazy(() => import('src/pages/explore'))
const FriendsPage = lazy(() => import('src/pages/friends'))
const NotificationsPage = lazy(() => import('src/pages/notifications'))
const InboxPage = lazy(() => import('src/pages/messages'))

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

const IndexPage: NextPage = () => {
  const { current } = usePage()

  return (
    <>
      <Meta />
      <VStack w="100%" spacing={0} pt="64px">
          {current === SPAPage.Feed && (
            <Suspense fallback={<LoaderPlaceholderPage />}>
              <FeedPage />
            </Suspense>
          )}
          {current === SPAPage.Search && (
            <Suspense fallback={<LoaderPlaceholderPage />}>
              <SearchPage />
            </Suspense>
          )}
          {current === SPAPage.Friends && (
            <Suspense fallback={<LoaderPlaceholderPage />}>
              <FriendsPage />
            </Suspense>
          )}
          {current === SPAPage.Notifications && (
            <Suspense fallback={<LoaderPlaceholderPage />}>
              <NotificationsPage />
            </Suspense>
          )}
          {current === SPAPage.Inbox && (
            <Suspense fallback={<LoaderPlaceholderPage />}>
              <InboxPage />
            </Suspense>
          )}
      </VStack>
    </>
  )
}

export default IndexPage
