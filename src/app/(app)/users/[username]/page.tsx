'use client'

import { Box, VStack } from '@chakra-ui/layout'
import { ProfileHeroBioAndInfo } from 'src/components/client/Profile/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/client/Profile/ProfileFeedTabs'
import { FC } from 'react'
import { ProfileHero } from 'src/components/client/Profile/ProfileHero'
import { Divider } from '@chakra-ui/react'
import { ProfileDetails } from 'src/components/client/Profile/ProfileHero/ProfileDetails'
import { useGetMeQuery, useGetUserByUsernameQuery, User } from '@rammble/sdk'
import { omit } from '@chakra-ui/object-utils'

const Page: FC<{ params: { username: string } }> = ({ params }) => {
  const { data, isLoading } = useGetUserByUsernameQuery({
    username: params.username,
  })

  if (!data?.user && !isLoading) {
    return <>404</>
  }

  return (
    <Box pt={6} w={'full'}>
      <VStack p={0} m={0} w={'full'} spacing={4}>
        <ProfileHero
          isLoading={isLoading}
          user={data?.user as User}
        />
        <ProfileHeroBioAndInfo isLoading={isLoading} />
        <ProfileDetails isLoading={isLoading} />
        <Divider border={'1px solid'} borderColor={'neutral.5a'} />
        <ProfileFeedTabs
          isLoading={isLoading}
          posts={data?.user.posts?.map((post) => ({
            ...post,
            poster: omit(data?.user, ['posts']),
          }))}
        />
      </VStack>
    </Box>
  )
}

export default Page
