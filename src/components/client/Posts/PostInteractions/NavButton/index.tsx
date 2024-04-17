import { Button, ButtonProps } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { As } from '@chakra-ui/react'
import { FC, ReactElement } from 'react'

export interface FeedButtonProps {
  as?: As
  icon: ReactElement
  label?: string
  ariaLabel: string
  color: ButtonProps['colorScheme']
  isActive?: boolean
  onClick?: () => void
}

export const NavButton: FC<FeedButtonProps> = ({
  as,
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
      as={as}
      colorScheme={isActive ? color : 'neutral'}
      aria-label={ariaLabel}
      pos="relative"
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      zIndex={1}
      variant="ghost"
      size="2"
      onMouseEnter={setIsHovering.on}
      onMouseLeave={setIsHovering.off}
    >
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
