'use client'

import { Box, VStack } from '@chakra-ui/layout'
import { ProfileHeroBioAndInfo } from 'src/components/client/Profile/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/client/Profile/ProfileFeedTabs'
import { FC } from 'react'
import { ProfileHero } from 'src/components/client/Profile/ProfileHero'
import { Divider } from '@chakra-ui/react'
import { ProfileDetails } from 'src/components/client/Profile/ProfileHero/ProfileDetails'
import { useGetPostQuery, useGetUserByUsernameQuery } from '@rammble/sdk'
import { omit } from '@chakra-ui/object-utils'
import { FeedPost } from 'src/components/client/Posts/FeedPost'

const Page: FC<{ params: { postId: string } }> = ({ params }) => {
  const { data, isLoading } = useGetPostQuery(params)

  if ((!data || !data.post) && !isLoading) {
    return <>404</>
  }

  console.log(isLoading, data?.post)

  return (
    <Box pt={6} w={'full'}>
      <FeedPost isLoading={isLoading} data={data?.post} shouldLink={false} />
    </Box>
  )
}

export default Page
