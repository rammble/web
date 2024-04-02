import { NextPage } from 'next'
import { Meta } from 'src/components/meta'
import { Box, HStack, VStack } from '@chakra-ui/layout'
import { ProfileHeroBanner } from 'src/components/ProfileHero/ProfileHeroBanner'
import { ProfileHeroInfo } from 'src/components/ProfileHero/ProfileHeroInfo'
import { ProfileHeroBioAndInfo } from 'src/components/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/ProfileFeedTabs'
import { MainLayout } from 'src/layouts/MainLayout'
import { Navigation } from 'src/components/Navigation'
import { LeftSideContent } from 'src/components/LeftSideContent'
import React from 'react'
import { ProfileHero } from 'src/components/ProfileHero'
import { Divider } from '@chakra-ui/react'
import { ProfileDetails } from 'src/components/ProfileHero/ProfileDetails'

const ProfilePage: NextPage = ({}) => {
  return (
    <MainLayout
      renderLeftNode={() => <LeftSideContent />}
      renderRightNode={() => <Navigation />}
      renderChatNode={() => null}
    >
      <Meta />
      <Box pt={6} w={'full'}>
        <VStack p={0} m={0} w={'full'} spacing={4}>
          <ProfileHero username={'username'} />
          <ProfileHeroBioAndInfo />
          <ProfileDetails />
          <Divider border={'1px solid'} borderColor={'neutral.5a'} />
          <ProfileFeedTabs />
        </VStack>
      </Box>
    </MainLayout>
  )
}

export default ProfilePage
