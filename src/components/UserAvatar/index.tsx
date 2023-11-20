import { FC } from 'react'
import { useRouter } from 'next/router'
import { Avatar } from '@chakra-ui/react'
import { UserProps } from '../../pages/index'

export interface UserAvatarProps {
  user: UserProps
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
      src={user?.avatarURL}
      boxSize="48px"
    />
  )
}
