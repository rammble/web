import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const fromTime = (time: number) => dayjs().from(time, true)

export default dayjs
