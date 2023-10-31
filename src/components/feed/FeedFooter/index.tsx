import { IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { HStack, VStack } from '@chakra-ui/layout'
import { useHideOnScroll } from 'src/hooks/useHideOnScroll'
import { FC } from 'react'
import { FeedFooterButton } from 'src/components/feed/FeedFooter/FeedFooterButton'
import { FeedIcon } from 'src/icons/FeedIcon'
import { SearchIcon } from 'src/icons/SearchIcon'
import { PeopleIcon } from 'src/icons/PeopleIcon'
import { NotificationIcon } from 'src/icons/NotificationIcon'
import { MessagingIcon } from 'src/icons/MessagingIcon'
import { AttachmentIcon } from 'src/icons/AttachmentIcon'

export interface FeedFooterProps {
  hasInput?: boolean
}

export const FeedFooter: FC<FeedFooterProps> = ({ hasInput = false }) => {
  const hideOnScroll = useHideOnScroll()

  return (
    <>
      <IconButton
        transition="right 0.82s cubic-bezier(0.04, 0.91, 0.6, 0.99)"
        transitionDelay={hideOnScroll ? '0.42s' : '0s'}
        right={hideOnScroll ? 4 : 'calc(-64px - 16px)'}
        aria-label="action-icon"
        pos="fixed"
        bottom={4}
        bg="brand"
        boxSize="64px"
        rounded="20px"
      />
      <VStack
        transition="bottom 0.82s cubic-bezier(0.04, 0.91, 0.6, 0.99)"
        transitionDelay={hideOnScroll ? '0.2s' : '0s'}
        bottom={hideOnScroll ? '-144px' : 0}
        bg="blurred-overlay"
        backdropFilter="blur(12px)"
        p={2}
        pos="fixed"
        left={0}
        right={0}
        w="full"
        zIndex={10}
        spacing={2}
      >
        {hasInput && (
          <HStack w="full" spacing="1px">
            <Image
              src="https://picsum.photos/56"
              boxSize="56px"
              rounded="8px 0 0 8px"
            />
            <HStack
              w="full"
              spacing={4}
              p={3}
              pl={5}
              bg="#15151F"
              rounded="0 8px 8px 0"
            >
              <Input
                h="32px"
                w="full"
                bg="transparent"
                placeholder="Here's the latest..."
              />
              <AttachmentIcon boxSize="32px" color="brand" />
            </HStack>
          </HStack>
        )}
        <HStack spacing={2} w="full">
          <FeedFooterButton
            href="/feed"
            label="Feed"
            icon={<FeedIcon boxSize="32px" />}
          />
          <FeedFooterButton
            href="/search"
            label="Search"
            icon={<SearchIcon boxSize="32px" />}
          />
          <FeedFooterButton
            href="/friends"
            label="Friends"
            icon={<PeopleIcon boxSize="32px" />}
          />
          <FeedFooterButton
            href="/notifications"
            label="Notifications"
            icon={<NotificationIcon boxSize="32px" />}
          />
          <FeedFooterButton
            href="/messages"
            label="Messages"
            icon={<MessagingIcon boxSize="32px" />}
          />
        </HStack>
      </VStack>
    </>
  )
}
