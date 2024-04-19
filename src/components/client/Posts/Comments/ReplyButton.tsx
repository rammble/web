import { FC } from 'react'
import { Button, IconButton } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { HeartFilledIcon, HeartIcon, ResetIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'

export interface ReplyButtonProps {
  ariaLabel: string
  label?: string
  isActive?: boolean
  onClick?: () => void
}

export const ReplyButton: FC<ReplyButtonProps> = ({
  label,
  ariaLabel,
  isActive,
  onClick = () => {},
}) => {
  const [isHovering, setIsHovering] = useBoolean(false)

  return (
    <IconButton
      aria-label={ariaLabel}
      variant="ghost"
      pos="relative"
      zIndex={1}
      onClick={onClick}
      colorScheme={isActive ? 'error' : 'neutral'}
      onMouseEnter={setIsHovering.on}
      onMouseLeave={setIsHovering.off}
      icon={<ResetIcon />}
    />
  )
}
