import { FC } from 'react'
import { Button } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'

export interface FollowButtonProps {}

export const FollowButton: FC<FollowButtonProps> = () => {
  const [isFollowed, setFollowed] = useBoolean(false)

  return (
    <Button
      bg={isFollowed ? 'blurp.lighter' : 'brand.darker'}
      px={8}
      py={2}
      variant={'unstyled'}
      color="ui.90"
      fontSize={16}
      rounded="12px"
      _hover={{ bg: 'blurp.darker' }}
      fontWeight={500}
      lineHeight="24px"
      onClick={setFollowed.toggle}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
