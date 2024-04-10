import { Text } from '@chakra-ui/layout'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export interface ArticlesReadMoreLinkProps {
  title: string
  path: string
}

export const ArticlesNavButton: FC<ArticlesReadMoreLinkProps> = ({
  title,
  path,
}) => {
  const router = useRouter()
  const [isActive, setActive] = useState(
    title.toLowerCase().includes(router.query?.name as string),
  )

  useEffect(() => {
    setActive(title.toLowerCase().includes(router.query?.name as string))
  }, [router.query?.name])

  return (
    <Text
      cursor={'pointer'}
      color={isActive ? 'neutral.7a' : 'accent.9'}
      onClick={() => router.push(path)}
    >
      {title}
    </Text>
  )
}
