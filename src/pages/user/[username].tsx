import { NextPage } from 'next'
import { Meta } from 'src/components/meta'
import { VStack } from '@chakra-ui/layout'
import { ProfileHeroBanner } from 'src/components/ProfileHero/ProfileHeroBanner'
import { ProfileHeroInfo } from 'src/components/ProfileHero/ProfileHeroInfo'
import { ProfileHeroBioAndInfo } from 'src/components/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/ProfileFeedTabs'
import { MainLayout } from 'src/layouts/MainLayout'
import { Navigation } from 'src/components/Navigation'

const ProfilePage: NextPage = ({}) => {
  return (
    <MainLayout
      renderRightNode={() => <Navigation />}
      renderChatNode={() => null}
    >
      <Meta />
      <VStack w="full" spacing={0} pt="calc(64px + 8px)" px={2} pb={2}>
        <VStack w="full" spacing={0}>
          <ProfileHeroBanner />
          <VStack w="full" spacing={4}>
            <ProfileHeroInfo username="baller" />
            <ProfileHeroBioAndInfo />
            <VStack w="full" spacing={1}>
              <ProfileFeedTabs />
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </MainLayout>
  )
}

export default ProfilePage
