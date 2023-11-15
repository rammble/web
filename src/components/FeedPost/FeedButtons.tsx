import {FC} from "react";
import {HStack} from "@chakra-ui/layout";
import {IconButton} from "@chakra-ui/button";
import {RepostIcon} from "../../icons/RepostIcon";
import {ShareIcon} from "../../icons/ShareIcon";
import {LikeButton} from "../LikeButton/index";

export interface FeedButtonsProps {
  likes: number
}

export const FeedButtons: FC<FeedButtonsProps> = ({likes}) => {
  return (
      <HStack w="full" justify="space-between">
        <LikeButton likes={likes} />
        <HStack spacing={4}>
          <IconButton
              aria-label="Repost"
              color="ui.60"
              icon={
                <RepostIcon boxSize="32px" transition="all 0.05s ease-in-out" />
              }
              _active={{
                color: 'brand',
              }}
          />
          <IconButton
              aria-label="Share"
              color="ui.60"
              icon={
                <ShareIcon boxSize="32px" transition="all 0.05s ease-in-out" />
              }
              _active={{
                color: 'brand',
              }}
          />
        </HStack>
      </HStack>
  )
}
