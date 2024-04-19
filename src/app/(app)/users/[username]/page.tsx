'use client'

import { Box, VStack } from '@chakra-ui/layout'
import { ProfileHeroBioAndInfo } from 'src/components/client/Profile/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/client/Profile/ProfileFeedTabs'
import { FC } from 'react'
import { ProfileHero } from 'src/components/client/Profile/ProfileHero'
import { Divider } from '@chakra-ui/react'
import { ProfileDetails } from 'src/components/client/Profile/ProfileHero/ProfileDetails'
import { useGetUserByUsernameQuery } from '@rammble/sdk'
import { omit } from '@chakra-ui/object-utils'

const Page: FC<{ params: { username: string } }> = ({ params }) => {
  const { data } = useGetUserByUsernameQuery({
    username: params.username,
  })

  return (
    <Box pt={6} w={'full'}>
      <VStack p={0} m={0} w={'full'} spacing={4}>
        <ProfileHero
          username={data?.user.username ?? params.username}
          avatarUrl={data?.user.profile.avatarUrl}
        />
        <ProfileHeroBioAndInfo />
        <ProfileDetails />
        <Divider border={'1px solid'} borderColor={'neutral.5a'} />
        <ProfileFeedTabs
          posts={data?.user.posts.map((post) => ({
            ...post,
            poster: omit(data?.user, ['posts']),
          }))}
        />
      </VStack>
    </Box>
  )
}

export default Page
