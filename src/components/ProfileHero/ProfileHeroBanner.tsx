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
      w="full"
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
    </VStack>
  )
}
