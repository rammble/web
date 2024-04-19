import { FC } from 'react'
import { HStack, Text } from '@chakra-ui/layout'
import { Avatar, AvatarGroup } from '@chakra-ui/react'

export interface AvatarReadMoreProps {
  replies: any
}

export const AvatarReadMore: FC<AvatarReadMoreProps> = ({ replies }) => {
  return (
    <HStack
      w={'full'}
      cursor={'pointer'}
      _hover={{ textDecoration: 'underline' }}
    >
      <AvatarGroup size={'1'}>
        {replies?.map((r: any) => {
          return <Avatar name={r.poster?.username} />
        })}
      </AvatarGroup>
      <Text textStyle={'2'} color={'neutral.10a'}>
        {replies?.length?.toLocaleString() || 0} more replies
      </Text>
    </HStack>
  )
}
