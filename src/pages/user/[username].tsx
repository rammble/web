import { GetServerSideProps, NextPage } from 'next'
import { Meta } from 'src/components/meta'
import { VStack } from '@chakra-ui/layout'
import { ProfileHeroBanner } from 'src/components/ProfileHero/ProfileHeroBanner'
import { ProfileHeroInfo } from 'src/components/ProfileHero/ProfileHeroInfo'
import { ProfileHeroBioAndInfo } from 'src/components/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/ProfileFeedTabs'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { FeedPost } from 'src/components/FeedPost'

const ProfilePage: NextPage<{
  params: { username: string }
}> = ({ params }) => (
  <>
    <Meta />
    <VStack w="full" spacing={0} pt="calc(64px + 8px)" px={2} pb={2}>
      <VStack w="full" spacing={0}>
        <ProfileHeroBanner />
        <VStack w="full" spacing={4}>
          <ProfileHeroInfo username={params.username} />
          <ProfileHeroBioAndInfo />
          <VStack w="full" spacing={1}>
            <ProfileFeedTabs />
            {FakeFeedPosts.map((d, i) => {
              return <FeedPost key={i} data={d} />
            })}
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  </>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context

  const username = params?.username

  if (username && typeof username === 'string' && username.startsWith('@')) {
    return {
      redirect: {
        destination: context.resolvedUrl.slice(1),
        permanent: false,
      },
    }
  }

  return {
    props: {
      params,
    },
  }
}

export default ProfilePage
