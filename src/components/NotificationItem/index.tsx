import React, { FC, useEffect } from 'react'

import { SystemNotificationItem } from 'src/components/NotificationItem/SystemNotification'
import { Notification } from 'src/components/NotificationItem/Notification'

export interface NotificationItemProps {
  image?: string
  title?: string
  text?: string
  time: number
  read: boolean
  system?: boolean
}

export const NotificationItem: FC<NotificationItemProps> = ({
  image,
  title,
  text,
  time,
  read,
  system,
}) => {
  if (system) {
    return (
      <SystemNotificationItem
        image={image}
        title={title}
        text={text}
        time={time}
        read={read}
        system={system}
      />
    )
  }
  return (
    <Notification
      image={image}
      title={title}
      text={text}
      time={time}
      read={read}
      system={system}
    />
  )
}
