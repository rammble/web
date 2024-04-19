import { Heading, VStack } from '@chakra-ui/layout'
import { FC } from 'react'

export interface ProfileBadgeProps {}

export const ArticlesNavigation: FC<ProfileBadgeProps> = () => {
  return (
    <VStack h={'full'} justifyContent={'center'} alignItems={'flex-start'}>
      <Heading textStyle={'5'}>Read More</Heading>
      {/*  no placeholder data */}
      {/*   <ArticlesNavButton
            title={article.title}
            path={article.path}
            key={index}
          />*/}
    </VStack>
  )
}
