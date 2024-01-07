import {
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { EditorRenderer } from 'src/components/EditorRenderer'
import { transitions } from 'src/components/motion'
import { PostOptionButtons } from './PostOptionButtons'
import { Textarea } from '@chakra-ui/textarea'
import { Flex, HStack, Text } from '@chakra-ui/layout'

export interface CreatePostModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
}

export const CreatePostModal: FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [content, setContent] = useState('')
  const [count, setCount] = useState(0)
  const inputFieldRef = useRef()

  console.log(content)

  return (
    <Popover
      onClose={onClose}
      isOpen={isOpen}
      matchWidth
      strategy="fixed"
      gutter={36}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        motionProps={{
          transition: transitions.fast,
        }}
        initial={{
          y: -32,
          opacity: 0,
          scale: 1,
        }}
        variants={{
          enter: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: transitions.fast,
          },
          exit: {
            y: -32,
            scale: 1,
            opacity: 0,
            transition: transitions.fast,
          },
        }}
      >
        <PopoverBody p={3}>
          <EditorRenderer editable content={content} onUpdate={setContent} />
          <HStack mt={2} justifyContent={'space-between'}>
            <HStack>
              <Text cursor={'pointer'} fontSize={12} color={'brand.darker'}>
                Posting guidelines
              </Text>
              <Text
                cursor={'pointer'}
                fontSize={12}
                color={'ui.40'}
                fontWeight={200}
              >
                Support
              </Text>
            </HStack>
            <Text
              fontSize={12}
              color={count >= 130 ? 'accent.yellow' : 'ui.40'}
              fontWeight={200}
            >
              {count}/140
            </Text>
          </HStack>
          <HStack mt={2} justifyContent={'space-between'}>
            <PostOptionButtons />
            <Button
              _hover={{ bg: 'brand', color: 'ui.100' }}
              bg={'brand.darkest'}
              color={'brand'}
            >
              Post
            </Button>
          </HStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
