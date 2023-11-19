import {Box, Flex, Heading, HStack, Text} from '@chakra-ui/layout'
import { Portal } from '@chakra-ui/react'
import {FC, useRef, useState} from 'react'
import {FakeFeedPosts, FeedProps} from "../../pages/index";
import {UserAvatar} from "../UserAvatar/index";
import {Button, IconButton} from "@chakra-ui/button";
import {AttachmentIcon} from "../../icons/AttachmentIcon";
import {SendIcon} from "../../icons/SendIcon";
import {Input} from "@chakra-ui/input";
import {MotionBox, transitions} from "../motion";
import {CloseIcon} from "../../icons/CloseIcon";
import {useDisclosure} from "@chakra-ui/react";
import {CreatePostModal} from "./CreatePostModal";

export interface FeedPostProps {
}


export const CreatePost: FC<FeedPostProps> = ({}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const inputField = useRef<HTMLTextAreaElement>()


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
              w="100%"
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
              initial={{opacity: 1, scale: 1}}
              // animate={{ opacity: isEmpty ? 1 : 0, scale: isEmpty ? 1 : 0.6 }}
          >
            <HStack>
              <AttachmentIcon zIndex={10} cursor={'pointer'} boxSize="24px" color="brand"/>
              <SendIcon zIndex={10} cursor={'pointer'} boxSize="24px" color="brand.darker"/>
            </HStack>
          </MotionBox>
          <MotionBox
              pos="absolute"
              p={2}
              top={0}
              right={0}
              transition={transitions.fast}
              initial={{opacity: 0, scale: 0.6}}
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
                icon={<CloseIcon boxSize="24px"/>}
            />
          </MotionBox>
        </>
    )
  }

  const PlaceholderField = () => {
    return (
        <Flex gap={5}>
          <Text color={'ui.90'}  isTruncated maxWidth={150} fontWeight={700} fontSize={16}>
            XiG
          </Text>
          <Text color={'ui.40'}  isTruncated maxWidth={300} fontWeight={400}>
            Xignotic
          </Text>
        </Flex>
    )
  }

  return (
      <Box ref={inputField} display={'block'} w={'100%'} gap={4} m={1} position={'relative'} zIndex={1401}>
        <CreatePostModal width={inputField.current?.getBoundingClientRect().width} isOpen={isOpen} onClose={onClose}/>
        <HStack alignItems={'center'}>
          <UserAvatar user={FakeFeedPosts[0].user}/>
          <Box  rounded="8px" bg="#15151F" w="full" pos="relative">
            <Box p={4}>
              {!isOpen ? <InputField/> : <PlaceholderField/>}
            </Box>
          </Box>
        </HStack>
      </Box>
  )
}
