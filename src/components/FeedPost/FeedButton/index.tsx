import { Button } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { FC, ReactElement } from 'react'

export interface FeedButtonProps {
  icon: ReactElement
  label?: string
  ariaLabel: string
  color: string
  isActive?: boolean
  onClick?: () => void
}

export const FeedButton: FC<FeedButtonProps> = ({
  icon,
  label,
  ariaLabel,
  color,
  isActive,
  onClick = () => {},
}) => {
  const [isHovering, setIsHovering] = useBoolean(false)

  return (
    <Button
      variant="unstyled"
      color={isActive ? color : 'ui'}
      _hover={{ color }}
      aria-label={ariaLabel}
      pos="relative"
      onClick={onClick}
      zIndex={1}
      onMouseEnter={setIsHovering.on}
      onMouseLeave={setIsHovering.off}
    >
      <Box
        rounded="full"
        zIndex={-1}
        pos="absolute"
        inset={-2}
        h={9}
        bg={color}
        transform={`scale(${isHovering ? 1 : 0})`}
        opacity={isHovering ? 0.05 : 0}
        transition="all 0.08s cubic-bezier(0.04, 0.91, 0.6, 1)"
      />
      <HStack zIndex={1} pr={label ? 1 : 0}>
        {icon}
        {label && (
          <Text
            fontSize={14}
            transition="all 0.22s cubic-bezier(0.04, 0.91, 0.6, 1)"
          >
            {label}
          </Text>
        )}
      </HStack>
    </Button>
  )
}
