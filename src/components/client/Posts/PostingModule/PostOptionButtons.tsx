'use client'

import { IconButton } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { ImageIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'
import { EmojiPopup } from 'src/components/client/Posts/PostingModule/EmojiPicker'

export interface PostOptionButtonsProps {
  setContent: (val: (val: string) => string) => any
}

export const PostOptionButtons: FC<PostOptionButtonsProps> = ({
  setContent,
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
      <EmojiPopup setContent={setContent} />
    </HStack>
  )
}
