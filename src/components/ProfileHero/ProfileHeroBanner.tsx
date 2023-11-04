import { Flex, HStack, VStack } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { LeftArrowIcon } from 'src/icons/LeftArrowIcon'
import { MailIcon } from 'src/icons/MailIcon'
import { FC } from 'react'

export interface ProfileHeroBannerProps {}

export const ProfileHeroBanner: FC<ProfileHeroBannerProps> = () => {
  return (
    <VStack
      bgColor="ui.3"
      bgImage="https://picsum.photos/600/600"
      rounded="24px 8px"
      w="100%"
      h="148px"
      p={2}
      align="start"
      justify="space-between"
    >
      <Flex>
        <IconButton
          p={2}
          rounded="99px"
          aria-label="Go Back"
          bg="nui.60"
          color="ui.80"
          icon={<LeftArrowIcon boxSize={6} />}
        />
      </Flex>
      <HStack w="100%" spacing={3} justify="end">
        <IconButton
          p={2}
          rounded="99px"
          aria-label="Go Back"
          bg="nui.60"
          color="ui.80"
          border="1px solid"
          borderColor="ui.20"
          icon={<MailIcon boxSize={6} />}
        />
        <Button
          bg="ui.100"
          px={8}
          py={2}
          color="bg"
          fontSize={16}
          rounded="99px"
          fontWeight={500}
          lineHeight="24px"
        >
          Follow
        </Button>
      </HStack>
    </VStack>
  )
}
