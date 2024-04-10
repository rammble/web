import { MainLayout } from 'src/layouts/MainLayout'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = async ({ children }) => (
  <MainLayout>{children}</MainLayout>
)

export default Layout
