'use client'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

export interface ExploreCardProps {
  path?: string
  displayName: string
  name: string
  description?: string
  imageUrl?: string
  count?: string
  lastActive?: string
  interaction?: ReactNode
}

export const ExploreCard: FC<ExploreCardProps> = ({
  displayName,
  name,
  description,
  imageUrl,
  count,
  path,
  interaction,
  lastActive
}) => {
  const router = useRouter()

  return (
    <HStack borderRadius={'4'} p={3} bg={'panel.default'} border={'1px solid'} borderColor={'neutral.6a'} w={'full'}  cursor={path ? 'pointer' : 'auto'}
            onClick={(e) => {
              if (path) {
                e.stopPropagation()
                router.push(path)
              }
            }}>
      <HStack w={'full'}>
        <Avatar
          src={imageUrl}
          name={displayName}
          size={'5'}
        />
        <VStack align={'flex-start'} spacing={1}>
          <HStack>
            <Text textStyle={'2'} fontWeight={'bold'}>
              {displayName}
            </Text>
            <Text textStyle={'2'} color={'neutral.8a'}>
              {name}
            </Text>
            <Text color="neutral.8a">·</Text>
            <Text textStyle={'2'} color={'neutral.8a'}>
              {count}
            </Text>
          </HStack>
          <Text textStyle={'1'} color={'neutral.10'} maxWidth={'350px'} isTruncated>
            {description}
          </Text>
          {lastActive && <Text textStyle={'1'} color={'accent.9a'}>
          </Text>}
        </VStack>
      </HStack>
      {interaction}
    </HStack>
  )
}
