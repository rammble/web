import { NextPage } from 'next'
import { Center } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/react'

export const NotFoundPage: NextPage = () => {
  return (
    <Center>
      <Tag padding={5}>404</Tag>
    </Center>
  )
}

export default NotFoundPage
