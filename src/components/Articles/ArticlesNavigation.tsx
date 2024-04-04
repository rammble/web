import { Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { Icon, Tooltip } from '@chakra-ui/react'
import { FakeArticles } from 'src/utils/placeholder.data'
import { ArticlesNavButton } from 'src/components/Articles/ArticlesNavButton'

export interface ProfileBadgeProps {}

export const ArticlesNavigation: FC<ProfileBadgeProps> = () => {
  return (
    <VStack h={'full'} justifyContent={'center'} alignItems={'flex-start'}>
      <Heading textStyle={'5'}>Read More</Heading>
      {FakeArticles.map((article, index) => {
        return (
          <ArticlesNavButton
            title={article.title}
            path={article.path}
            key={index}
          />
        )
      })}
    </VStack>
  )
}
