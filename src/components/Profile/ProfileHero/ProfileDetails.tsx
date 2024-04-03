import { HStack, Text, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { CalendarIcon, Link1Icon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export interface ProfileDetailsProps {}

const details = [
  {
    icon: Link1Icon,
    value: 'xignotic.dev/username/superlong/weird/url',
    isLink: true,
  },
  {
    icon: CalendarIcon,
    value: 'Joined May 2021',
  },
]

export const ProfileDetails: FC<ProfileDetailsProps> = () => {
  return (
    <HStack w={'full'} spacing={4}>
      {details.map((detail, index) => (
        <HStack key={index} alignItems={'center'}>
          <Icon as={detail.icon} color={'neutral.10a'} />
          <Text
            cursor={detail.isLink ? 'pointer' : 'default'}
            textStyle={'2'}
            isTruncated
            maxW={'150px'}
            color={detail.isLink ? 'accent.7' : 'neutral.10a'}
          >
            {detail.value}
          </Text>
        </HStack>
      ))}
    </HStack>
  )
}
