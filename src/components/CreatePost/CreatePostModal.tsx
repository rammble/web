import {FC, useEffect, useState} from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box
} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button";
import {PostOptionButtons} from "./PostOptionButtons";
import {Textarea} from "@chakra-ui/textarea";
import {Flex, HStack, Text} from "@chakra-ui/layout";

export interface CreatePostModalProps {
  width: number
  isOpen: boolean
  onClose: () => void
}

export const CreatePostModal: FC<CreatePostModalProps> = ({width, isOpen, onClose}) => {
  const [count, setCount] = useState(0);

  return (
      <Modal
          onClose={onClose}
          isOpen={isOpen}
          size={'xl'}
          motionPreset='slideInTop'
      >
        <ModalOverlay/>
        <ModalContent
            containerProps={{ paddingRight: '8vw' }}
            minWidth="fit-content"
                      height="fit-content" style={{position: 'absolute', top: '25px'}}
                      borderRadius={16} bg={'blurp.darker'}>
          <ModalBody p={3}>
            <Textarea
                w="100%"
                h="100%"
                bg="transparent"
                maxLength={140}
                overflowY={'hidden'}
                fontSize={16}
                fontWeight={400}
                outline={'0.2px solid'}
                outlineColor={'brand'}
                borderRadius={9}
                onChange={e => setCount(e.target.value.length)}
                _placeholder={{
                  color: 'ui.40',
                  fontStyle: 'italic',
                }}
                placeholder="Ramble..."
                resize="none"
            />
            <HStack mt={2} justifyContent={'space-between'}>
              <HStack>
                <Text cursor={'pointer'} fontSize={12} color={'brand.darker'}>
                  Posting guidelines
                </Text>
                <Text cursor={'pointer'} fontSize={12} color={'ui.40'} fontWeight={200}>
                  Support
                </Text>
              </HStack>
              <Text fontSize={12} color={count >= 130 ? 'accent.yellow' : 'ui.40'} fontWeight={200}>
                {count}/140
              </Text>
            </HStack>
            <HStack mt={2} justifyContent={'space-between'}>
              <PostOptionButtons/>
              <Button _hover={{bg: 'brand', color: 'ui.100'}} bg={'brand.darkest'} color={'brand'}>
                Post
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}