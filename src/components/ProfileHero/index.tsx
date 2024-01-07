import { FC } from 'react'
import { Text } from '@chakra-ui/layout'

export interface ProfileHeroProps {
  username: string
}

export const ProfileHero: FC<ProfileHeroProps> = ({ username }) => {
  return (
    <div>
      <Text>Profile Hero</Text>
    </div>
  )
}
