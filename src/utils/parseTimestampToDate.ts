
import dayjs from "dayjs";

import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(relativeTime);
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: 'a few seconds',
    m: "am",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }
})

export const parseTimestampToDate = (createdAt: string): string => {
  const date = dayjs(new Date(Number(Number(createdAt) * 1000)))

  const todaysDate = dayjs(new Date())

  const differenceInDays = date.diff(todaysDate, 'd')

  const differenceInYears = date.diff(todaysDate, 'y')

  if (differenceInDays > 0) {
    return dayjs(date).format(`MMM D ${differenceInYears > 0 ? 'YYYY' : ''}`)
  } else {
    return dayjs(date).fromNow(true)

  }
}
