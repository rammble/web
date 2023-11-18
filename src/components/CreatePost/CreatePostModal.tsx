import {FC} from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button";

export interface CreatePostModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CreatePostModal: FC<CreatePostModalProps> = ({isOpen, onClose}) => {
  return (
      <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody w={'150px'}>
            Hello
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}
