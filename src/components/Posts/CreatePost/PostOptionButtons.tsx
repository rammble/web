import { IconButton } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { FaceIcon, ImageIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'

export interface PostOptionButtonsProps {}

export const PostOptionButtons: FC<PostOptionButtonsProps> = () => {
  return (
    <HStack spacing="0">
      <IconButton
        variant="ghost"
        colorScheme="accent"
        size="3"
        icon={<Icon as={ImageIcon} boxSize="18px" />}
        aria-label="Media"
      />
      <IconButton
        variant="ghost"
        colorScheme="accent"
        size="3"
        icon={<Icon as={FaceIcon} boxSize="18px" />}
        aria-label="Emotes"
      />
    </HStack>
  )
}
