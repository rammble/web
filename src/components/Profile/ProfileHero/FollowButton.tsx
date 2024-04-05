import { FC } from 'react'
import { Button } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'

export interface FollowButtonProps {}

export const FollowButton: FC<FollowButtonProps> = () => {
  const [isFollowed, setFollowed] = useBoolean(false)

  return (
    <Button
      bg={isFollowed ? 'neutral.3a' : 'accent.9'}
      size={'3'}
      variant={'solid'}
      onClick={setFollowed.toggle}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
