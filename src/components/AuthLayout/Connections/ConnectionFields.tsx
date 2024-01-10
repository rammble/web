import { Box, Center, Flex, Text } from '@chakra-ui/layout'
import { AbsoluteCenter, Divider } from '@chakra-ui/react'
import ConnectionButton from 'src/components/AuthLayout/Connections/ConnectionButton'
import { useRouter } from 'next/router'

export default function ConnectionFields({
  isSignUpPage,
}: {
  isSignUpPage: boolean
}) {
  const router = useRouter()
  return (
    <Box w={'full'}>
      <Flex flexDir={'column'} gap={'12px'}>
        <ConnectionButton type={'google'} text={'Continue with Google'} />
        <ConnectionButton type={'discord'} text={'Continue with Discord'} />
      </Flex>
      <Center mt={'32px'}>
        <Flex alignItems={'center'}>
          <Text color={'ui.40'} fontSize={'14px'} fontWeight={400}>
            {isSignUpPage
              ? 'Already have an account?'
              : "Don't have an account?"}
          </Text>
          <Text
            cursor={'pointer'}
            fontWeight={400}
            fontSize={'14px'}
            ml={2}
            onClick={() => router.push(isSignUpPage ? '/login' : '/register')}
            color={'brand'}
          >
            {isSignUpPage ? 'Sign in' : 'Create an account'}
          </Text>
        </Flex>
      </Center>
    </Box>
  )
}
