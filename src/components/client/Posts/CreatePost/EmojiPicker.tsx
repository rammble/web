'use client'

import {FC, useMemo} from 'react'
import {EmojiStyle, Theme} from "emoji-picker-react";
import dynamic from 'next/dynamic';
import {IconButton} from "@chakra-ui/button";
import {Icon, Popover, PopoverArrow, PopoverContent, PopoverTrigger} from "@chakra-ui/react";
import {FaceIcon} from "@radix-ui/react-icons";
import {PostOptionButtonsProps} from "src/components/client/Posts/CreatePost/PostOptionButtons";

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);

export const EmojiPopup: FC<PostOptionButtonsProps> = ({setContent}) => {

  const memoEmojiPopup = useMemo(() => {
    return  <Popover>
      <PopoverTrigger>
        <IconButton
          variant="ghost"
          colorScheme="accent"
          size="3"
          icon={<Icon as={FaceIcon} boxSize="18px" />}
          aria-label="Emotes"
        />
      </PopoverTrigger>
      <PopoverContent position={'relative'}>
        <PopoverArrow bg={'accent.4'}/>
        <Picker
          lazyLoadEmojis
          autoFocusSearch
          onEmojiClick={(e) => {
            setContent((val: string) => `${val}${e.emoji}`)
          }}
          theme={Theme.AUTO}
          emojiStyle={EmojiStyle.TWITTER}
          style={{}}
        />
      </PopoverContent>
    </Popover>
  }, [])

  return <>
    {memoEmojiPopup}
  </>
}
