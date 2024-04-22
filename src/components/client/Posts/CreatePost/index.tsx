'use client'

import {FC, PropsWithChildren, useState} from 'react'
import {Button} from '@chakra-ui/button'
import {PostOptionButtons} from 'src/components/client/Posts/CreatePost/PostOptionButtons'
import {Flex, HStack, Text, VStack} from '@chakra-ui/layout'
import {OverflowingTextarea} from 'src/components/client/OverflowingTextarea'
import {Avatar} from '@chakra-ui/react'
import {Link} from '@chakra-ui/next-js'

export interface CreatePostModalProps extends PropsWithChildren {
  buttonLabel: string
  mutation: (body: string) => void
  guidelineOptions: {
    path: string
    label: string
  }
}

const getTextColor = (count: number) => {
  if (count <= 399) {
    return 'neutral.9a'
  }

  if (count <= 469) {
    return 'warn.9a'
  }

  if (count <= 479) {
    return 'error.11a'
  }

  return 'error.9a'
}

export const CreatePost: FC<CreatePostModalProps> = ({ buttonLabel, guidelineOptions, mutation }) => {

  const [content, setContent] = useState('')
  const count = content.length

  return (
    <Flex w="full" gap="4">
      <Avatar src="https://picsum.photos/48" size="4" />
      <VStack w="full" spacing="2">
        <OverflowingTextarea
          minHeight="64px"
          maxAdjustedHeight={240}
          placeholder="Ramble about anything..."
          maxLength={480}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
        <HStack w="full" justifyContent="space-between">
          <Link
            href={`/${guidelineOptions.path}`}
            textStyle="2"
            fontWeight="regular"
            color="accent.11a"
            _hover={{
              color: 'accent.10a',
            }}
          >
            {guidelineOptions.label}
          </Link>
          <Text textStyle="1" fontWeight="regular" color={getTextColor(count)}>
            {count}/480
          </Text>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <PostOptionButtons />
          <Button
            size="3"
            colorScheme="accent"
            onClick={() =>
              mutation(content)
            }
          >
            {buttonLabel}
          </Button>
        </HStack>
      </VStack>
    </Flex>
  )
}
