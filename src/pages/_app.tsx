import 'src/styles/globals.style.css'
import 'src/styles/emoji.style.css'
import 'src/styles/loading.style.css'

import { AppProps } from 'next/app'
import { AppProvider } from 'src/providers/AppProvider'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'

if (process.env.NODE_ENV === 'development') {
  loadDevMessages()
  loadErrorMessages()
}

type TProps = Pick<AppProps, 'Component' | 'pageProps'> & {}

const CustomApp = ({ Component, pageProps }: TProps) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
)

export default CustomApp
