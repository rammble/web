import {Box, Center, Flex, Heading, HStack, Text} from "@chakra-ui/layout";
import {AbsoluteCenter, Avatar, PinInputField, PinInput} from "@chakra-ui/react";
import {ReactNode} from "react";


export default function OneTimePasswordTab({user, setTabIndex}) {
  return (
    <Flex gap={'16px'} w={'350px'} flexDir={'column'}>
      <Flex flexDir={'column'} gap={'16px'}>
        <Flex gap={1} fontWeight={600}>
          <Heading fontSize={'28px'}>Are you really</Heading>
          <Heading fontSize={'28px'} color={'brand'}>@{user.username}</Heading>
          <Heading fontSize={'28px'}>?</Heading>

        </Flex>
        <Text fontSize={'16px'} fontWeight={400} color={'ui.80'}>
          This account is protected with 2-factor authentication, if you really are who you say you are, enter the code
          from your authenticator, email, or SMS app.
        </Text>
      </Flex>
      <Center m={20}>
        <Avatar src={user.avatarURL} size={'xl'}/>
      </Center>
      <Flex gap={'12px'} flexDir={'column'}>
        <Text fontSize={'20px'} fontWeight={400}>
          Enter code
        </Text>
        <HStack gap={'16px'}>
          <PinInput size={'lg'} otp isInvalid={false} autoFocus={true}  errorBorderColor={"red.400"} onComplete={() => setTabIndex(2) }>
            <PinInputField borderRadius={'2px'} bg={'ui.5'} h={'66px'} border={'2px solid'} borderColor={'ui.10'}/>
            <PinInputField borderRadius={'2px'} bg={'ui.5'} h={'66px'} border={'2px solid'} borderColor={'ui.10'}/>
            <PinInputField borderRadius={'2px'} bg={'ui.5'} h={'66px'} border={'2px solid'} borderColor={'ui.10'}/>
            <PinInputField borderRadius={'2px'} bg={'ui.5'} h={'66px'} border={'2px solid'} borderColor={'ui.10'}/>
            <PinInputField borderRadius={'2px'} bg={'ui.5'} h={'66px'} border={'2px solid'} borderColor={'ui.10'}/>
            <PinInputField borderRadius={'2px'} bg={'ui.5'} h={'66px'} border={'2px solid'} borderColor={'ui.10'}/>
          </PinInput>
        </HStack>
      </Flex>
    </Flex>
  )
}
