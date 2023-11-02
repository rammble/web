import { atomWithImmer } from 'jotai-immer'
import { useAtom } from 'jotai'
import { usePrevious } from '@chakra-ui/react-use-previous'

export enum SPAPage {
  // The number indicates the order of which they will display, 0-4 left to right
  Feed = 0,
  Search = 1,
  Friends = 2,
  Notifications = 3,
  Inbox = 4,
}

export const pageAtom = atomWithImmer(SPAPage.Feed)

export const usePage = () => {
  const [current, _set] = useAtom(pageAtom)
  const previous = usePrevious(current)

  const direction = current > previous ? -1 : 1

  const set = (page: SPAPage) => {
    _set(() => page)
    window.scrollTo(0, 0)
  }

  return { current, set, previous, direction } as const
}
