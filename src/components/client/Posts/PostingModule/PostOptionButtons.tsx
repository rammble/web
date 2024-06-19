'use client'

import { IconButton } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { FaceIcon, ImageIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'
import { EmojiPicker } from 'src/components/client/EmojiPicker'
import { EmojiClickData } from 'emoji-picker-react'

export interface PostOptionButtonsProps {
  onAddEmoji: (emoji: EmojiClickData) => void
}

export const PostOptionButtons: FC<PostOptionButtonsProps> = ({
  onAddEmoji,
}) => {
  return (
    <HStack spacing="0">
      <IconButton
        variant="ghost"
        colorScheme="accent"
        size="3"
        icon={<Icon as={ImageIcon} boxSize="18px" />}
        aria-label="Media"
      />
      <EmojiPicker onEmojiClick={onAddEmoji}>
        <IconButton
          variant="ghost"
          colorScheme="accent"
          size="3"
          icon={<Icon as={FaceIcon} boxSize="18px" />}
          aria-label="Emotes"
        />
      </EmojiPicker>
    </HStack>
  )
}
