import { FC, PropsWithChildren } from 'react'
import { VStack } from '@chakra-ui/layout'
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react'
import dynamic from 'next/dynamic'

const Picker = dynamic(
  () => {
    return import('emoji-picker-react')
  },
  { ssr: false },
)

export const EmojiPicker: FC<
  PropsWithChildren<{
    onEmojiClick?: (emoji: EmojiClickData) => void
  }>
> = ({ children, onEmojiClick }) => {
  return (
    <Popover placement="bottom-start" closeOnEsc closeOnBlur>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <PopoverBody
          as={VStack}
          align="start"
          spacing={0}
          rounded="4"
          bg="panel.solid"
          shadow="0px 4px 16px 0px rgba(0, 0, 0, 0.50)"
          borderWidth="1px"
          borderColor="neutral.3"
          w="428px"
        >
          <Picker
            width="100%"
            theme={Theme.AUTO}
            emojiStyle={EmojiStyle.TWITTER}
            onEmojiClick={onEmojiClick}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
