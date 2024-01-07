import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const day = dayjs()

export const fromTime = (time: number) => day.from(time, true)
