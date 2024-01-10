import 'src/styles/globals.style.css'
import 'src/styles/emoji.style.css'
import 'src/styles/loading.style.css'
import type { AppProps } from 'next/app'
import { AppProvider } from 'src/providers/AppProvider'
import { NextPage } from 'next'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default App
