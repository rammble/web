import { IconButton } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { AttachmentIcon } from '../../icons/AttachmentIcon'
import { CalenderIcon } from '../../icons/CalenderIcon'
import { EmoteIcon } from '../../icons/EmoteIcon'
import { GifIcon } from '../../icons/GifIcon'
import { MicrophoneIcon } from '../../icons/MicrophoneIcon'
import { PollIcon } from '../../icons/PollIcon'

export interface PostOptionButtonsProps {}

export const PostOptionButtons: FC<PostOptionButtonsProps> = () => {
  return (
    <HStack>
      <IconButton
        size={'md'}
        icon={<AttachmentIcon boxSize={6} />}
        _hover={{ bg: 'blurp.darker' }}
        bg={'transparent'}
        aria-label={'Attach image'}
      />
      <IconButton
        size={'md'}
        bg={'transparent'}
        _hover={{ bg: 'blurp.darker' }}
        icon={<GifIcon boxSize={6} />}
        aria-label={'Gifs'}
      />
      <IconButton
        size={'md'}
        bg={'transparent'}
        _hover={{ bg: 'blurp.darker' }}
        icon={<PollIcon boxSize={6} />}
        aria-label={'Gifs'}
      />
      <IconButton
        size={'md'}
        bg={'transparent'}
        _hover={{ bg: 'blurp.darker' }}
        icon={<EmoteIcon boxSize={6} />}
        aria-label={'Emojis'}
      />
      <IconButton
        size={'md'}
        bg={'transparent'}
        _hover={{ bg: 'blurp.darker' }}
        icon={<MicrophoneIcon boxSize={6} />}
        aria-label={'Microphone'}
      />
      <IconButton
        size={'md'}
        bg={'transparent  '}
        _hover={{ bg: 'blurp.darker' }}
        icon={<CalenderIcon boxSize={6} />}
        aria-label={'Calendar'}
      />
    </HStack>
  )
}
