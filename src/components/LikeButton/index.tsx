import { FC } from 'react'
import { Button } from '@chakra-ui/button'
import { EmptyHeartIcon } from 'src/icons/EmptyHeartIcon'
import { FilledHeartIcon } from 'src/icons/FilledHeartIcon'
import { useBoolean } from '@chakra-ui/hooks'
import { HStack, Text } from '@chakra-ui/layout'

export interface LikeButtonProps {}

export const LikeButton: FC<LikeButtonProps> = ({}) => {
  const [isLiked, setIsLiked] = useBoolean(false)

  return (
    <Button aria-label="Like" pos="relative" onClick={setIsLiked.toggle}>
      <HStack>
        <EmptyHeartIcon
          boxSize="32px"
          transform={`scale(${isLiked ? 0 : 1})`}
          opacity={isLiked ? 0 : 1}
          transition="all 0.22s cubic-bezier(0.04, 0.91, 0.6, 1.5)"
        />
        <FilledHeartIcon
          pos="absolute"
          inset={0}
          boxSize="32px"
          color="brand"
          transform={`scale(${isLiked ? 1 : 0})`}
          opacity={isLiked ? 1 : 0}
          transition="all 0.22s cubic-bezier(0.04, 0.91, 0.6, 1.5)"
        />
        <FilledHeartIcon
          pos="absolute"
          inset={0}
          boxSize="32px"
          color="brand"
          transform={`scale(${isLiked ? 2 : 0})`}
          opacity={isLiked ? 0 : 1}
          transitionDelay="0.2s"
          transition={`all ${
            isLiked ? 0.22 : 0
          }s cubic-bezier(0.14, 0.91, 0.6, 1)`}
        />
        <Text
          color={isLiked ? 'brand' : 'ui'}
          transition="all 0.22s cubic-bezier(0.04, 0.91, 0.6, 1)"
        >
          41
        </Text>
      </HStack>
    </Button>
  )
}
