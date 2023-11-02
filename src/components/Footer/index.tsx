import { Button, IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import { useHideOnScroll } from 'src/hooks/useHideOnScroll'
import { FC, useEffect, useRef, useState } from 'react'
import { FooterButton } from 'src/components/Footer/FooterButton'
import { FeedIcon } from 'src/icons/FeedIcon'
import { SearchIcon } from 'src/icons/SearchIcon'
import { PeopleIcon } from 'src/icons/PeopleIcon'
import { NotificationIcon } from 'src/icons/NotificationIcon'
import { MessagingIcon } from 'src/icons/MessagingIcon'
import { AttachmentIcon } from 'src/icons/AttachmentIcon'
import { SPAPage, usePage } from 'src/store/page.store'
import { MotionBox, MotionStack, transitions } from 'src/components/motion'
import { PlusIcon } from 'src/icons/PlusIcon'
import { CloseIcon } from 'src/icons/CloseIcon'
import { EmoteIcon } from 'src/icons/EmoteIcon'
import { GifIcon } from 'src/icons/GifIcon'
import { SendIcon } from 'src/icons/SendIcon'
import { Textarea } from '@chakra-ui/textarea'

export interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { current } = usePage()
  const shouldHideOnScroll = useHideOnScroll()

  const [isPosting, setIsPosting] = useState(false)

  const hasPostingInput = current === SPAPage.Feed

  const hideOnScroll = !isPosting && shouldHideOnScroll

  useEffect(() => {
    if (!textareaRef.current) return
    if (isPosting) {
      textareaRef.current.focus()
    } else {
      textareaRef.current.blur()
      textareaRef.current.value = ''
    }
  }, [textareaRef.current, isPosting])

  return (
    <>
      {hasPostingInput && (
        <MotionBox
          pos="fixed"
          right={4}
          bottom={4}
          initial={{ x: 96 }}
          animate={{ x: hideOnScroll ? 0 : 96 }}
          transition={{
            ...transitions.medium,
            delay: hideOnScroll ? 0.2 : 0,
          }}
        >
          <IconButton
            aria-label="action-icon"
            bg="brand"
            boxSize="64px"
            rounded="20px"
            overflow="hidden"
            icon={<PlusIcon boxSize="40px" color="ui.80" />}
          />
        </MotionBox>
      )}
      <MotionStack
        direction="column"
        bg="blurred-overlay"
        backdropFilter="blur(12px)"
        p={2}
        pos="fixed"
        left={0}
        right={0}
        bottom={0}
        w="full"
        zIndex={10}
        spacing={2}
        initial={{ y: 0 }}
        animate={{ y: hideOnScroll ? 144 : 0 }}
        transition={{
          ...transitions.medium,
          delay: hideOnScroll ? 0.2 : 0,
        }}
      >
        {isPosting && hasPostingInput && (
          <>
            <IconButton
              pos="absolute"
              p={4}
              top={-16}
              right={0}
              aria-label="Close posting input"
              icon={
                <CloseIcon boxSize="32px" color="ui.80" pointerEvents="none" />
              }
              onClick={() => setIsPosting(false)}
            />
            <VStack w="100%" spacing={0} bg="#15151F" rounded="8px">
              <Box w="100%" px={2} pt={2}>
                <Box
                  w="100%"
                  h="180px"
                  bg="#111116"
                  rounded="4px"
                  py={2}
                  px={3}
                >
                  <Textarea
                    ref={textareaRef}
                    w="100%"
                    h="100%"
                    bg="transparent"
                    fontSize={16}
                    fontWeight={400}
                    _placeholder={{
                      color: 'ui.40',
                      fontStyle: 'italic',
                    }}
                    placeholder="Ramble..."
                    resize="none"
                    overflowY="auto"
                  />
                </Box>
              </Box>
              <HStack
                direction="row"
                bg="transparent"
                w="full"
                spacing={0}
                justify="space-between"
              >
                <HStack spacing={0}>
                  <IconButton
                    aria-label="Attach an emoji"
                    p={2}
                    icon={<EmoteIcon boxSize="32px" color="ui.40" />}
                  />
                  <IconButton
                    aria-label="Attach a GIF"
                    p={2}
                    icon={<GifIcon boxSize="32px" color="ui.40" />}
                  />
                </HStack>
                <HStack spacing={0}>
                  <IconButton
                    aria-label="Attach something"
                    p={2}
                    icon={<AttachmentIcon boxSize="32px" color="ui.40" />}
                  />
                  <IconButton
                    aria-label="Send ramble"
                    p={2}
                    icon={<SendIcon boxSize="32px" color="brand" />}
                  />
                </HStack>
              </HStack>
            </VStack>
          </>
        )}
        {!isPosting && hasPostingInput && (
          <HStack w="full" spacing={0} bg="#15151F" rounded="0 8px 8px 0">
            <Image
              src="https://picsum.photos/56"
              boxSize="56px"
              rounded="8px 0 0 8px"
            />
            <Button
              p={3}
              pl={5}
              w="100%"
              bg="#15151F"
              lineHeight="32px"
              onClick={() => setIsPosting(true)}
            >
              <Flex w="100%">
                <Text
                  as="span"
                  color="ui.40"
                  fontSize={16}
                  fontWeight={400}
                  fontStyle="italic"
                >
                  Ramble...
                </Text>
              </Flex>
            </Button>
            <IconButton
              aria-label="Attach something"
              p={3}
              icon={<AttachmentIcon boxSize="32px" color="brand" />}
            />
          </HStack>
        )}
        {!isPosting && (
          <HStack spacing={2} w="full">
            <FooterButton
              page={SPAPage.Feed}
              label="Feed"
              icon={<FeedIcon boxSize="32px" />}
            />
            <FooterButton
              page={SPAPage.Search}
              label="Search"
              icon={<SearchIcon boxSize="32px" />}
            />
            <FooterButton
              page={SPAPage.Friends}
              label="Friends"
              icon={<PeopleIcon boxSize="32px" />}
            />
            <FooterButton
              page={SPAPage.Notifications}
              label="Notifications"
              icon={<NotificationIcon boxSize="32px" />}
            />
            <FooterButton
              page={SPAPage.Inbox}
              label="Inbox"
              icon={<MessagingIcon boxSize="32px" />}
              notifications={1}
            />
          </HStack>
        )}
      </MotionStack>
      <Box h="40vh" w="full" />
    </>
  )
}
