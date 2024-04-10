import { FC, PropsWithChildren } from 'react'
import { AuthLayout } from 'src/layouts/AuthLayout'

const Layout: FC<PropsWithChildren> = async ({ children }) => (
  <AuthLayout>{children}</AuthLayout>
)

export default Layout
