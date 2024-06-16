'use client'
import {Box, HStack, Text, VStack} from "@chakra-ui/layout";
import {Avatar} from "@chakra-ui/react";
import {FC} from "react";
import {Button} from "@chakra-ui/button";

export interface ExploreCardProps {
  path?: string
  displayName: string
  name: string
  description: string
  imageUrl: string
  count?: string
  lastActive?: string
  interaction?: {
    label: string
    onClick: () => void
  }
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
  return (
    <HStack borderRadius={'4'} p={3} bg={'panel.default'} border={'1px solid'} borderColor={'neutral.6a'} w={'full'} cursor={path ? 'cursor' : 'auto'}>
      <HStack w={'full'}>
        <Avatar
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
      <Button size={'2'} variant={'soft'} color={'accent.11a'} cursor={'pointer'} onClick={(e) => {
        e.stopPropagation()
        interaction?.onClick()
      }}>
        Follow
      </Button>
    </HStack>
  )
}
