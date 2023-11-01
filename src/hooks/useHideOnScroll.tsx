import { useBoolean } from '@chakra-ui/hooks'
import { useEffect, useState } from 'react'
import { SPAPage, usePage } from 'src/store/page.store'

export const useHideOnScroll = () => {
  const [previousScroll, setPreviousScroll] = useState(0)
  const [hidden, setHidden] = useBoolean(false)

  useEffect(() => {
    const onScroll: EventListener = () => {
      if (window.scrollY > 64 && window.scrollY > previousScroll) {
        if (!hidden) {
          setHidden.on()
        }
      } else {
        if (hidden) {
          setHidden.off()
        }
      }
      setPreviousScroll(window.scrollY)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [previousScroll, hidden])

  return hidden
}
