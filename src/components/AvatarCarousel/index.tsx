import { FC } from 'react'
import { Box, HStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export const AvatarCarousel: FC = () => (
  <Box w="full" pos="relative">
    <HStack overflowX="auto">
      <Image src="https://picsum.photos/56?1" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?2" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?3" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?4" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?5" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?6" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?7" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?8" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?9" boxSize="64px" rounded="8px" />
      <Image src="https://picsum.photos/56?10" boxSize="64px" rounded="8px" />
    </HStack>
    <Box
      pos="absolute"
      top={0}
      bottom={0}
      right={0}
      w="95px"
      h="100%"
      zIndex={10}
      pointerEvents="none"
      bgGradient="linear(270deg, bg 0%, transparent 100%)"
    />
  </Box>
)
