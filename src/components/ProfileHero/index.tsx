import { FC } from 'react'
import { VStack } from '@chakra-ui/layout'
import { ProfileHeroInfo } from 'src/components/ProfileHero/ProfileHeroInfo'
import { ProfileHeroBioAndInfo } from 'src/components/ProfileHero/ProfileHeroBioAndInfo'
import { ProfileFeedTabs } from 'src/components/ProfileFeedTabs'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { FeedPost } from 'src/components/FeedPost'
import { ProfileHeroBanner } from 'src/components/ProfileHero/ProfileHeroBanner'

export interface ProfileHeroProps {
  username: string
}

export const ProfileHero: FC<ProfileHeroProps> = ({ username }) => {
  return (
    <VStack w="100%" spacing={0} pt="calc(64px + 8px)" px={2} pb={2}>
      <VStack w="100%" spacing={0}>
        <ProfileHeroBanner />
        <VStack w="100%" spacing={4}>
          <ProfileHeroInfo username={username} />
          <ProfileHeroBioAndInfo profileCTO={true} />
          <VStack w="100%" spacing={1}>
            <ProfileFeedTabs />
            {FakeFeedPosts.map((d, i) => {
              return <FeedPost key={i} data={d} />
            })}
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}
