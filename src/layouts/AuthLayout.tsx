import { FC, PropsWithChildren } from 'react'
import { Center } from '@chakra-ui/layout'

interface AuthLayoutProps extends PropsWithChildren {}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Center
      boxSize="full"
      backgroundSize="cover"
      backgroundImage="linear-gradient(342deg, rgba(73, 160, 238, 0.20) -7.26%, rgba(0, 0, 0, 0.00) 98.18%), linear-gradient(0deg, rgba(18, 18, 23, 0.60) 0%, rgba(18, 18, 23, 0.60) 100%), url('/signup-page-background.png'), lightgray 50% / cover no-repeat"
    >
      {children}
    </Center>
  )
}
