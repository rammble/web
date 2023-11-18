import { FC } from 'react'
import { Image } from '@chakra-ui/image'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { EmptyHeartIcon } from 'src/icons/EmptyHeartIcon'
import { EmoteIcon } from 'src/icons/EmoteIcon'
import {Button, IconButton} from "@chakra-ui/button";
import {MailIcon} from "../../icons/MailIcon";
import {Avatar} from "@chakra-ui/react";

export interface ProfileHeroInfoProps {
  username: string
}

export const ProfileHeroInfo: FC<ProfileHeroInfoProps> = ({ username }) => {
  return (
    <HStack  alignItems={'center'} direction="row" w="100%" spacing={4}>
      <Avatar
          mt={-10}
        borderRadius="20px"
        boxSize="96px"
        src="https://picsum.photos/96"
        boxShadow="0 0 0 6px #121217"
      />
      <VStack mt={1} w="100%" align="start" spacing={3}>
        <VStack w="100%" align="start" justify="start" spacing={1}>
          <HStack spacing={2}>
            <Text
              fontSize={24}
              fontWeight={500}
              color="ui.100"
              lineHeight="normal"
            >
              Display Name
            </Text>
            <HStack spacing={1}>
              <EmptyHeartIcon boxSize={6} color="brand" />
              <EmoteIcon boxSize={6} color="brand" />
            </HStack>
          </HStack>
          <Text
            fontSize={16}
            fontWeight={500}
            color="ui.40"
            lineHeight="normal"
          >
            @{username}
          </Text>
        </VStack>
      </VStack>
      <HStack w="100%" spacing={3} justify="end">
        <IconButton
            p={2}
            rounded="99px"
            aria-label="Go Back"
            bg="nui.60"
            color="ui.80"
            border="1px solid"
            borderColor="ui.20"
            icon={<MailIcon boxSize={6} />}
        />
        <Button
            bg="brand.darker"
            px={8}
            py={2}
            color="ui.90"
            fontSize={16}
            rounded="99px"
            fontWeight={500}
            lineHeight="24px"
        >
          Follow
        </Button>
      </HStack>
    </HStack>
  )
}
