import { FC } from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { FakeProfileSelfPromoBanner } from 'src/utils/placeholder.data'
import { Button } from '@chakra-ui/button'

export interface ProfileHeroActionProps {}

export const ProfileSelfPromoBanner: FC<ProfileHeroActionProps> = () => {
  return (
    <Box w="full" h="full" borderRadius="12px" layerStyle="gradients.grey">
      <VStack p={4} alignItems="start">
        <Text as="span" fontWeight={400} color="ui.100" fontSize="xl">
          {FakeProfileSelfPromoBanner.text}
        </Text>
        <Text as="span" fontWeight={400} color="ui.30">
          {FakeProfileSelfPromoBanner.description}
        </Text>
        <HStack spacing={4}>
          <Button variant="selfpromo" textColor="black" backgroundColor="ui">
            {FakeProfileSelfPromoBanner.buttons[0].text}
          </Button>
          <Button variant="selfpromo" textColor="ui.30" backgroundColor="ui.1">
            {FakeProfileSelfPromoBanner.buttons[1].text}
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}
