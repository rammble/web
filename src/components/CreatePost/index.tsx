import { IconButton } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import { FC } from 'react'
import { UserAvatar } from 'src/components/UserAvatar'
import { AttachmentIcon } from 'src/icons/AttachmentIcon'
import { CloseIcon } from 'src/icons/CloseIcon'
import { SendIcon } from 'src/icons/SendIcon'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { MotionBox, transitions } from 'src/components/motion'
import { CreatePostModal } from 'src/components/CreatePost/CreatePostModal'

export interface FeedPostProps {}

export const CreatePost: FC<FeedPostProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const InputField = () => {
    return (
      <>
        <Input
          variant={'unstyled'}
          onClick={onOpen}
          display="flex"
          outline={'none'}
          type="text"
          placeholder="Ramble about anything..."
          w="full"
          bg="transparent"
        />
        <MotionBox
          pos="absolute"
          p={4}
          top={0}
          zIndex={10}
          right={0}
          pointerEvents="none"
          transition={transitions.fast}
          initial={{ opacity: 1, scale: 1 }}
          // animate={{ opacity: isEmpty ? 1 : 0, scale: isEmpty ? 1 : 0.6 }}
        >
          <HStack>
            <AttachmentIcon
              zIndex={10}
              cursor={'pointer'}
              boxSize="24px"
              color="brand"
            />
            <SendIcon
              zIndex={10}
              cursor={'pointer'}
              boxSize="24px"
              color="brand.darker"
            />
          </HStack>
        </MotionBox>
        <MotionBox
          pos="absolute"
          p={2}
          top={0}
          right={0}
          transition={transitions.fast}
          initial={{ opacity: 0, scale: 0.6 }}
          /*animate={{
                opacity: isEmpty ? 0 : 1,
                scale: isEmpty ? 0.6 : 1,
                pointerEvents: isEmpty ? 'none' : 'auto',
              }}*/
        >
          <IconButton
            // onClick={() => setQuery('')}
            aria-label="Clear search"
            p={2}
            rounded="full"
            _active={{
              bg: 'ui.3',
            }}
            icon={<CloseIcon boxSize="24px" />}
          />
        </MotionBox>
      </>
    )
  }

  const PlaceholderField = () => {
    return (
      <Flex gap={5}>
        <Text
          color={'ui.90'}
          isTruncated
          maxWidth={150}
          fontWeight={700}
          fontSize={16}
        >
          XiG
        </Text>
        <Text color={'ui.40'} isTruncated maxWidth={300} fontWeight={400}>
          Xignotic
        </Text>
      </Flex>
    )
  }

  return (
    <Box pt={4}>
      <CreatePostModal isOpen={isOpen} onClose={onClose}>
        <HStack alignItems={'center'}>
          <UserAvatar user={FakeFeedPosts[0].user} />
          <Box rounded="8px" bg="#15151F" w="full" pos="relative">
            <Box p={4}>{!isOpen ? <InputField /> : <PlaceholderField />}</Box>
          </Box>
        </HStack>
      </CreatePostModal>
    </Box>
  )
}
