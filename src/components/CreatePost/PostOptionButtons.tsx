import { IconButton } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { AttachmentIcon } from 'src/icons/AttachmentIcon'
import { EmoteIcon } from 'src/icons/EmoteIcon'

export interface PostOptionButtonsProps {}

export const PostOptionButtons: FC<PostOptionButtonsProps> = () => {
  return (
    <HStack spacing="0">
      <IconButton
        variant="ghost"
        colorScheme="accent"
        size="3"
        icon={<AttachmentIcon boxSize="18px" />}
        aria-label="Media"
      />
      <IconButton
        variant="ghost"
        colorScheme="accent"
        size="3"
        icon={<EmoteIcon boxSize="18px" />}
        aria-label="Emotes"
      />
    </HStack>
  )
}
