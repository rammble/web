import {FC} from 'react'
import {FeedPost} from 'src/components/FeedPost'
import {MotionCenter, MotionStack} from 'src/components/motion'
import {VStack} from '@chakra-ui/layout'
import {CreatePost} from "../components/CreatePost/index";
import {
  Divider,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button";
import {LoadingIndicator} from "../components/LoadingIndicator";

export interface PostImageProps {
  url: string
}

export interface UserProps {
  username: string
  displayName: string
  avatarURL?: string
}

export interface FeedProps {
  user: UserProps
  post: {
    text: string
    likes: number
    postedAt: string
    images: PostImageProps[]
    tags: string[]
    isPinned?: boolean
  }
}

export const FakeFeedPosts = [
  {
    user: {
      username: "Xignotic",
      displayName: "XiG",
      avatarURL: 'https://cdn.discordapp.com/attachments/913067274997481534/1174372290964754512/Fu7MI5TXgAA3BSi.jpg?ex=65675a6c&is=6554e56c&hm=93ea8a087ace56dee03da0a3cf10fc4d511ab734eefa02efa7ba02c0aec38958&'
    },
    post: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo ornare ante, non finibus odio laoreet vel. Maecenas ut lacus finibus, congue lorem at, iaculis lectus. Nunc euismod, quam sed auctor eleifend, diam erat convallis orci, mollis bibendum odio sem ut ante. Fusce nec dolor odio. Quisque varius et velit id elementum. Etiam vitae ullamcorper diam, ut finibus magna. Pellentesque nec porttitor nisl. Vivamus auctor, dolor id interdum semper, diam urna porta orci, id ultrices felis leo quis nulla. Mauris molestie turpis quis urna vestibulum interdum. Vivamus fringilla volutpat nibh eget convallis. Pellentesque et mollis felis. Proin lacinia ipsum elit, eget aliquam leo placerat non.",
      likes: 5421,
      isPinned: true,
      postedAt: "",
      images: [],
      tags: [
        "ai", "meme", "gaming"
      ]
    }
  },
  {
    user: {
      username: "Ken",
      displayName: "Synqat",
      avatarURL: 'https://cdn.discordapp.com/attachments/913067274997481534/1174372460691460097/3de408ff438965e3e0518c89fc5bb3f0.gif?ex=65675a95&is=6554e595&hm=91840f73d023c5b16af59828a836c8fca6478e87c7451835084cee9538bdc638&'
    },
    post: {
      text: "Gotta say, I absolute love #art and #ai, check this outnpm @Xignotic",
      isPinned: true,
      likes: 49122,
      postedAt: "",
      images: [
        {
          url: "https://cdn.discordapp.com/attachments/913067274997481534/1174356449103708220/image.png?ex=65674bab&is=6554d6ab&hm=85b9a6a21aced9616514356a2f56b5f0ca6f51a7259fef941fe29f67808fe18a&"
        }
      ],
      tags: [
        "ai", "meme", "gaming"
      ]
    }
  },
  {
    user: {
      username: "Ken",
      displayName: "Synqat"
    },
    post: {
      text: "Gotta say, I absolute love #art and #ai",
      isPinned: false,
      likes: 49122,
      postedAt: "",
      images: [
        {
          url: "https://cdn.discordapp.com/attachments/913067274997481534/1174356449103708220/image.png?ex=65674bab&is=6554d6ab&hm=85b9a6a21aced9616514356a2f56b5f0ca6f51a7259fef941fe29f67808fe18a&"
        }
      ],
      tags: [
        "ai", "meme", "gaming"
      ]
    }
  }
]


const LoaderPlaceholderPage = () => (
    <MotionCenter
        h="calc(100vh - 128px)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
        }}
    >
      <LoadingIndicator />
    </MotionCenter>
)

const FeedPage: FC = () => (
    <>
      <CreatePost/>
      <VStack w="100%" gap={2}>
        <Divider height={'1px'} mt={4} mb={2} bg={'blurp.lighter'}/>
        {FakeFeedPosts.map((p, i) => {
          return <FeedPost key={i} data={p}/>
        })}
      </VStack>
    </>
)

export default FeedPage
