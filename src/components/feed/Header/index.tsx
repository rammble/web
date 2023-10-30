import { Image } from '@chakra-ui/image'
import { Heading, HStack } from '@chakra-ui/layout'
import { useHideOnScroll } from 'src/hooks/useHideOnScroll'

export const Header = () => {
  const hideOnScroll = useHideOnScroll()

  return (
    <HStack
      transition="top 0.82s cubic-bezier(0.04, 0.91, 0.6, 0.99)"
      transitionDelay={hideOnScroll ? '0.2s' : '0s'}
      top={hideOnScroll ? '-64px' : 0}
      py={2}
      pr={2}
      pl={4}
      left={0}
      right={0}
      zIndex={10}
      h="64px"
      pos="fixed"
      width="100%"
      bg="blurred-overlay"
      justify="space-between"
      backdropFilter="blur(20px)"
    >
      <Heading as="h1" fontSize={32} fontWeight="semibold" fontFamily="heading">
        rammble
      </Heading>
      <Image rounded="8px" src="https://picsum.photos/48" boxSize="48px" />
    </HStack>
  )
}
