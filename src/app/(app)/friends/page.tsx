import { Heading, VStack } from '@chakra-ui/layout'
import { FC } from 'react'
import { ContentCategory } from 'src/components/client/ContentCategory'

const Page: FC = () => (
  <VStack px={4} pt={2} pb={4} w="full" align="start" spacing={6}>
    <Heading as="h2" color="brand" fontSize={24} fontWeight={500}>
      Friends
    </Heading>
    <ContentCategory title="Suggestions"></ContentCategory>
    <ContentCategory title="Recent Activity">
      <VStack w="full" spacing={1} overflow="hidden"></VStack>
    </ContentCategory>
  </VStack>
)

export default Page
