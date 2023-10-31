import { FC, ReactNode } from 'react'
import { IconButton } from '@chakra-ui/button'
import { Link } from '@chakra-ui/next-js'
import { useRouter } from 'next/router'

export interface FeedFooterButtonProps {
  href: string
  label: string
  icon: ReactNode
}

export const FeedFooterButton: FC<FeedFooterButtonProps> = ({
  href,
  label,
  icon,
}) => {
  const router = useRouter()

  return (
    <IconButton
      as={Link}
      href={href}
      p={4}
      w="full"
      rounded="8px"
      aria-label={label}
      bg="linear-gradient(125deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.00) 99.69%)"
      color={href === router.asPath ? 'brand' : 'ui.40'}
    >
      {icon}
    </IconButton>
  )
}
