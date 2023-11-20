import {FC} from "react";
import {CreatePostModalProps} from "./CreatePostModal";
import {HStack} from "@chakra-ui/layout";
import {IconButton} from "@chakra-ui/button";
import {AttachmentIcon} from "src/icons/AttachmentIcon";
import {GifIcon} from "src/icons/GifIcon";
import {EmoteIcon} from "src/icons/EmoteIcon";
import {CalenderIcon} from "src/icons/CalenderIcon";
import {MicrophoneIcon} from "src/icons/MicrophoneIcon";
import {PollIcon} from "src/icons/PollIcon";
export interface PostOptionButtonsProps {

}


export const PostOptionButtons: FC<PostOptionButtonsProps> = () => {
  return (
      <HStack>
        <IconButton icon={<AttachmentIcon boxSize={6}/>} _hover={{bg: 'brand.darkest'}} bg={'blurp.lighter'} aria-label={'Attach image'}/>
        <IconButton icon={<GifIcon boxSize={6}/>} aria-label={'Gifs'}/>
        <IconButton icon={<PollIcon boxSize={6}/>} aria-label={'Gifs'}/>
        <IconButton icon={<EmoteIcon boxSize={6}/>} aria-label={'Emojis'}/>
        <IconButton icon={<MicrophoneIcon boxSize={6}/>} aria-label={'Microphone'}/>
        <IconButton icon={<CalenderIcon boxSize={6}/>} aria-label={'Calendar'}/>
      </HStack>
  )
}
