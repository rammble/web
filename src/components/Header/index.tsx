import { Heading, HStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { FC } from 'react'
import { LogoIcon } from 'src/icons/LogoIcon'
import { useHideOnScroll } from 'src/hooks/useHideOnScroll'
import { MotionStack, transitions } from 'src/components/motion'

export interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const hideOnScroll = useHideOnScroll()

  return (
    <MotionStack
      direction="row"
      py={2}
      px={2}
      h="64px"
      width="100%"
      justify="space-between"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      pos="fixed"
      bg="bg"
      // bg="blurred-overlay"
      // backdropFilter="blur(12px)"
      initial={{ y: 0 }}
      animate={{ y: hideOnScroll ? -64 : 0 }}
      transition={{
        ...transitions.medium,
        delay: hideOnScroll ? 0.2 : 0,
      }}
    >
      <Image src="/logo.png" boxSize="48px" />
      <Heading as="h1" fontSize={32} fontWeight="semibold" fontFamily="heading">
        rammble
      </Heading>
      <Image rounded="8px" src="https://picsum.photos/48" boxSize="48px" />
    </MotionStack>
  )
}
