import { FC, PropsWithChildren } from 'react'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

export interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
