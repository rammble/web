import { FC } from 'react'
import { Button } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'

export interface LikeButtonProps {
  ariaLabel: string
  label?: string
  isActive?: boolean
  onClick?: () => void
}

export const LikeButton: FC<LikeButtonProps> = ({
  label,
  ariaLabel,
  isActive,
  onClick = () => {},
}) => {
  const [isHovering, setIsHovering] = useBoolean(false)

  return (
    <Button
      aria-label={ariaLabel}
      variant="ghost"
      pos="relative"
      zIndex={1}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      colorScheme={isActive ? 'error' : 'neutral'}
      onMouseEnter={setIsHovering.on}
      onMouseLeave={setIsHovering.off}
    >
      <HStack zIndex={1} pr={label ? 1 : 0}>
        <Icon
          as={HeartIcon}
          boxSize={4}
          transform={`scale(${isActive ? 0 : 1})`}
          opacity={isActive ? 0 : 1}
          transition="all 0.22s cubic-bezier(0.04, 0.91, 0.6, 1.5)"
        />
        <Icon
          as={HeartFilledIcon}
          pos="absolute"
          boxSize={4}
          color="accent.red"
          transform={`scale(${isActive ? 1 : 0})`}
          opacity={isActive ? 1 : 0}
          transition="all 0.22s cubic-bezier(0.04, 0.91, 0.6, 1.5)"
        />
        <Icon
          as={HeartFilledIcon}
          pos="absolute"
          boxSize={4}
          color="accent.red"
          transform={`scale(${isActive ? 2 : 0})`}
          opacity={isActive ? 0 : 1}
          transitionDelay="0.2s"
          transition={`all ${
            isActive ? 0.22 : 0
          }s cubic-bezier(0.14, 0.91, 0.6, 1)`}
        />
        <Box
          rounded="full"
          zIndex={-1}
          pos="absolute"
          inset={-2}
          h={9}
          bg="accent.red"
          transform={`scale(${isHovering ? 1 : 0})`}
          opacity={isHovering ? 0.05 : 0}
          transition="all 0.08s cubic-bezier(0.04, 0.91, 0.6, 1)"
        />
        {label && (
          <Text
            fontSize={14}
            transition="all 0.22s cubic-bezier(0.04, 0.91, 0.6, 1)"
          >
            {Number(label).toLocaleString()}
          </Text>
        )}
      </HStack>
    </Button>
  )
}
