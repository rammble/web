import {Button} from "@chakra-ui/button";
import {GoogleIcon} from "src/icons/GoogleIcon";
import {DiscordIcon} from "src/icons/DiscordIcon";
import {Icon} from "@chakra-ui/react";

function getIcon(icon: string) {
  switch(icon) {
    case 'discord':
      return DiscordIcon
    case 'google':
      return GoogleIcon
  }
}

export interface ConnectionButtonProps {
  type: string
  text: string
}

export default function ConnectionButton({type, text}: ConnectionButtonProps) {
  return (
    <Button color={'ui.40'} fontWeight={400} variant={'simple'} bg={'ui.5'} border={'2px solid'} borderColor={'ui.5'} p={'12px 104px'} w={'100%'} gap={3}>
      <Icon boxSize={5} as={getIcon(type)}/>
      {text}
    </Button>
  )
}
