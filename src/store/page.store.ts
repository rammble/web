import { atomWithImmer } from 'jotai-immer'
import { useAtom } from 'jotai'
import { usePrevious } from '@chakra-ui/react-use-previous'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export enum SPAPage {
  // The number indicates the order of which they will display, 0-4 left to right
  None = -1,
  Feed = 0,
  Search = 1,
  Friends = 2,
  Notifications = 3,
  Inbox = 4,
}

export const pageAtom = atomWithImmer(SPAPage.Feed)

export const usePage = () => {
  const router = useRouter()
  const [current, _set] = useAtom(pageAtom)
  const previous = usePrevious(current)

  const direction = current > previous ? -1 : 1

  const set = async (page: SPAPage) => {
    window.scrollTo(0, 0)
    if (router.asPath !== '/') {
      await router.push('/')
    }
    _set(() => page)
  }

  useEffect(() => {
    if (router.pathname !== '/' && current !== SPAPage.None) {
      _set(() => SPAPage.None)
    }
  }, [router.pathname, current, _set])

  return { current, set, previous, direction } as const
}
