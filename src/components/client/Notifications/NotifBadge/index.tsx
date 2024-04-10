import { FC } from 'react'
import { Text } from '@chakra-ui/layout'

export interface NotifBadgeProps {
  value: number
}

export const NotifBadge: FC<NotifBadgeProps> = ({ value }) => (
  <Text
    pos="absolute"
    top={-1}
    right={-1}
    bg="#CE3434"
    px={1.5}
    py={0.5}
    lineHeight="16px"
    rounded="4px"
    noOfLines={1}
  >
    {value > 99 ? '99+' : value}
  </Text>
)
