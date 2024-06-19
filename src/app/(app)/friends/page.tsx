'use client'
import { Text, VStack } from '@chakra-ui/layout'
import { FC, useEffect, useMemo, useState } from 'react'
import { ExploreCard } from 'src/components/client/Explore/ExploreCard'
import { TabsLayout } from 'src/components/TabsLayout/TabsLayout'
import { useGetMeQuery, User } from '@rammble/sdk'

const Page: FC = () => {
  const { data, isLoading, isSuccess } = useGetMeQuery({})

  const [mutuals, setMututals] = useState<User[]>([])
  const [following, setFollowing] = useState<User[]>([])
  const [followers, setFollowers] = useState<User[]>([])

  useEffect(() => {
    setMututals(data?.user?.mutuals)
    setFollowing(data?.user?.followed)
    setFollowers(data?.user?.followers)
  }, [data])

  const mutualCards = useMemo(() => {
    return mutuals?.map((u) => {
      return (
        <ExploreCard
          path={`/users/${u.username}`}
          displayName={u?.displayName}
          name={u?.username}
          description={''}
          imageUrl={''}
        />
      )
    })
  }, [])

  const followingCards = useMemo(() => {
    return following?.map((u) => {
      return (
        <ExploreCard
          path={`/users/${u.username}`}
          displayName={u.displayName}
          name={u.username}
          description={'some profile'}
          imageUrl={''}
        />
      )
    })
  }, [])

  const followersCards = useMemo(() => {
    return followers?.map((u) => {
      return (
        <ExploreCard
          path={`/users/${u.username}`}
          displayName={u.displayName}
          name={u.username}
          description={''}
          imageUrl={''}
        />
      )
    })
  }, [])

  const panels = [mutualCards, followingCards, followersCards]

  return (
    <VStack w="full" spacing={2} py="6">
      <TabsLayout
        heading={'Friends'}
        tabs={['Mutuals', 'Following', 'Followers']}
        panels={panels}
        search={{
          placeholder: 'Search for friends',
        }}
      />
    </VStack>
  )
}

export default Page
