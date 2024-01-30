import { Meta } from '@storybook/react'
import { Heading, Text, VStack } from '@chakra-ui/layout'

const meta = {
  title: 'Introduction',
} satisfies Meta

export const Introduction = () => (
  <VStack align="start" p={8}>
    <Heading>Introduction</Heading>
    <Text>
      These are a collection of components and their states used within the
      Rammble app.
    </Text>
  </VStack>
)

export default meta
