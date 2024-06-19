import 'src/theme/colors/generated-colors.styles.css'
import { ReactNode } from 'react'
import { AppProvider } from 'src/providers/AppProvider'
import { Metadata } from 'next'
import Script from 'next/script'
import { cookies } from 'next/headers'
import { ColorMode } from '@chakra-ui/react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  preload: true,
  subsets: ['latin'],
  display: 'swap',
  variable: '--rammble-font',
})

export const metadata: Metadata = {}

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookiesList = cookies()
  const colorMode = cookiesList.get('chakra-ui-color-mode')

  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <AppProvider colorMode={colorMode?.value as ColorMode}>
          {children}
        </AppProvider>
        <Script
          src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
