
import dayjs from "dayjs";

import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

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
