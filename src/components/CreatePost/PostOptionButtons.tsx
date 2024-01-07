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
        icon={<AttachmentIcon boxSize={6} />}
        _hover={{ bg: 'brand.darkest' }}
        bg={'blurp.lighter'}
        aria-label={'Attach image'}
      />
      <IconButton icon={<GifIcon boxSize={6} />} aria-label={'Gifs'} />
      <IconButton icon={<PollIcon boxSize={6} />} aria-label={'Gifs'} />
      <IconButton icon={<EmoteIcon boxSize={6} />} aria-label={'Emojis'} />
      <IconButton
        icon={<MicrophoneIcon boxSize={6} />}
        aria-label={'Microphone'}
      />
      <IconButton icon={<CalenderIcon boxSize={6} />} aria-label={'Calendar'} />
    </HStack>
  )
}
