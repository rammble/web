import { Flex, Text } from '@chakra-ui/layout'

import { FC } from 'react'
import { Button } from '@chakra-ui/button'

export interface ResetPasswordTabProps {
  user: any
}

export const ResetPasswordTab: FC<ResetPasswordTabProps> = ({ user }) => {
  return (
    <Flex gap={4} w={'350px'} flexDir={'column'}>
      <Flex
        fontSize={'16px'}
        gap={1}
        flexWrap={'wrap'}
        fontWeight={400}
        color={'ui.80'}
      >
        For your safety, in order to recover the password for
        <Text color={'brand'}>@{user.username || 'Unknown'}</Text> a link will
        be sent to the email associated with this account from
        accounts@rammble.net, which will give you further instructions.
      </Flex>
      <Flex gap={'24px'} flexDir={'column'}>
        <Button
          textTransform={'uppercase'}
          variant={'filled'}
          type={'submit'}
          fontWeight={600}
          fontSize={'20px'}
          color={'brand'}
          borderColor={'brand.darkest'}
          border={'2px solid'}
          borderRadius={'8px'}
          bg={'brand.darkest'}
          p={'16px'}
        >
          Start Rambling
        </Button>
      </Flex>
    </Flex>
  )
}
