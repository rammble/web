import { FC, PropsWithChildren } from 'react'
import { rubik, theme, urbanist } from 'src/theme'
import { ChakraBaseProvider } from '@chakra-ui/react'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <>
    <style jsx global>
      {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
          --font-urbanist: ${urbanist.style.fontFamily};
        }
      `}
    </style>
    <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
  </>
)
