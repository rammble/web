import { FC } from 'react'
import { useRouter } from 'next/router'
import { Avatar } from '@chakra-ui/react'
import { GetMeQuery } from '@rammble/sdk'

export interface UserAvatarProps {
  user: GetMeQuery['me']['posts'][number]['poster']
}

export const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  const router = useRouter()

  return (
    <Avatar
      cursor={'pointer'}
      onClick={() => router.push(`/user/${user.username}`)}
      bg={'blurp.darker'}
      borderRadius="12px"
      aria-label={'avatar'}
      src={`https://picsum.photos/48?${user.id}`}
      boxSize="48px"
    />
  )
}
