import { Box, VStack } from '@chakra-ui/layout'
import { ProfileHeroBioAndInfo } from 'src/components/client/Profile/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/client/Profile/ProfileFeedTabs'
import { FC } from 'react'
import { ProfileHero } from 'src/components/client/Profile/ProfileHero'
import { Divider } from '@chakra-ui/react'
import { ProfileDetails } from 'src/components/client/Profile/ProfileHero/ProfileDetails'

const Page: FC = () => (
  <Box pt={6} w={'full'}>
    <VStack p={0} m={0} w={'full'} spacing={4}>
      <ProfileHero username={'username'} />
      <ProfileHeroBioAndInfo />
      <ProfileDetails />
      <Divider border={'1px solid'} borderColor={'neutral.5a'} />
      <ProfileFeedTabs />
    </VStack>
  </Box>
)

export default Page
