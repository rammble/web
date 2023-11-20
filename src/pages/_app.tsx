import 'src/styles/emoji.style.css'
import 'src/styles/loading.style.css'

import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { Layout } from 'src/layouts/Layout'
import { AppProvider } from 'src/providers/AppProvider'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>
)

export default App
