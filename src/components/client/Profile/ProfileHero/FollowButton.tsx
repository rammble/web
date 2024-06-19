import { FC } from 'react'
import { Button } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'
import {
  getGetMeQueryKey,
  getGetUserByUsernameQueryKey,
  useFollowMutation,
  useGetMeQuery,
  useQueryClient,
  useToggleFollowMutation,
} from '@rammble/sdk'

export interface FollowButtonProps {
  userId?: string
  username?: string
  isFollowing?: boolean
}

export const FollowButton: FC<FollowButtonProps> = ({
  userId,
  username,
  isFollowing,
}) => {
  const queryClient = useQueryClient()

  const { mutateAsync: followUser } = useToggleFollowMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: getGetUserByUsernameQueryKey({ username }),
      }),
  })

  return (
    <Button
      size={'3'}
      variant={'solid'}
      colorScheme={isFollowing ? 'neutral' : 'accent'}
      onClick={() => {
        followUser({ userId: userId })
      }}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
