'use client'
import { Text, VStack } from '@chakra-ui/layout'
import { FC, useEffect, useMemo, useState } from 'react'
import { ExploreCard } from 'src/components/client/Explore/ExploreCard'
import { TabsLayout } from 'src/components/TabsLayout/TabsLayout'
import { useGetMeQuery, User, useToggleFollowMutation } from '@rammble/sdk'
import { useBoolean } from '@chakra-ui/hooks'
import { Button } from '@chakra-ui/button'

const Page: FC = () => {

  const {mutateAsync: followUser} = useToggleFollowMutation({})

  const { data  } = useGetMeQuery({}, {})

  const FollowInteraction = ({userId , isFollowed}: {userId: string, isFollowed: boolean}) => {
    const [isFollowing, {toggle}] = useBoolean(isFollowed)

    return <Button size={'2'} variant={'soft'} color={'accent.11a'} cursor={'pointer'} onClick={(e) => {
      e.stopPropagation()
      followUser({userId})
      toggle()
    }}>
      {isFollowing ? 'Unfollow': 'Follow'}
    </Button>
  }

  const Card = ({user}: {user: User}) => {
    return <ExploreCard
      path={`/users/${user.username}`}
      displayName={user.displayName}
      name={user?.username}
      description={user.profile.bio || "Some weird bio"}
      imageUrl={user.profile.avatarUrl as string}
      interaction={<FollowInteraction userId={user.id} isFollowed={user.isFollowed}/>}
    />
  }

  const mutualCards = useMemo(() => {
    return data?.user?.mutuals?.map((user) => {
      return <Card user={user as User}/>
    })
  }, [data])

  const followingCards = useMemo(() => {
    return data?.user?.followed?.map((user) => {
      return <Card user={user as User}/>
    })
  }, [data])

  const followersCards = useMemo(() => {
    return data?.user?.followers?.map((user) => {
      return <Card user={user as User}/>
    })
  }, [data])

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
