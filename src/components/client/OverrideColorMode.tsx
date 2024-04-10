'use client'

import { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'

export const OverrideColorMode = ({ mode }: any) => {
  const { setColorMode } = useColorMode()

  useEffect(() => {
    if (!mode) {
      return
    }
    localStorage.setItem('chakra-ui-color-mode', mode)
    setColorMode(mode)
  }, [mode])

  return null
}
