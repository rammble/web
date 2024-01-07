import { Center, Flex, Heading, Text } from '@chakra-ui/layout'
import { Avatar, Checkbox } from '@chakra-ui/react'
import { FC } from 'react'
import { UserProps } from 'src/pages'
import { Button } from '@chakra-ui/button'

export interface AuthCompleteTabProps {
  user: UserProps
  otpCode: string
}

export const AuthCompleteTab: FC<AuthCompleteTabProps> = ({
  user,
  otpCode,
}) => {
  return (
    <Flex gap={4} w={'350px'} flexDir={'column'}>
      <Flex flexDir={'column'} gap={4}>
        <Flex gap={1} fontWeight={600}>
          <Heading fontSize={'28px'}>Welcome back</Heading>
          <Heading fontSize={'28px'} color={'brand'}>
            @{user.username}
          </Heading>
          <Heading fontSize={'28px'}>!</Heading>
        </Flex>
      </Flex>
      <Text fontSize={'16px'} fontWeight={400} color={'ui.80'}>
        We're so glad you're back!
      </Text>
      <Center m={20}>
        <Avatar src={user.avatarURL} size={'xl'} />
      </Center>
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
        <Flex flexDir={'column'} gap={'12px'}>
          <Checkbox
            borderColor={'blurp.lighter'}
            _checked={{
              '& .chakra-checkbox__control': {
                background: 'brand',
                border: 'brand',
              },
            }}
            size={'lg'}
            gap={'12px'}
          >
            <Flex
              fontWeight={400}
              fontSize={'14px'}
              color={'ui.40'}
              flexWrap={'wrap'}
              gap={1}
            >
              <Text>Remember this computer for</Text>
              <Text color={'brand'}>30 days</Text>
            </Flex>
          </Checkbox>
          <Checkbox
            borderColor={'blurp.lighter'}
            _checked={{
              '& .chakra-checkbox__control': {
                background: 'brand',
                border: 'brand',
              },
            }}
            size={'lg'}
            gap={'12px'}
          >
            <Flex
              fontWeight={400}
              fontSize={'14px'}
              color={'ui.40'}
              flexWrap={'wrap'}
              gap={1}
            >
              <Text>Trust this computer for</Text>
              <Text color={'brand'}>forever</Text>
            </Flex>
          </Checkbox>
        </Flex>
      </Flex>
    </Flex>
  )
}
