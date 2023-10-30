import { Image } from '@chakra-ui/image'
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>rammble</title>
      </Head>
      <HStack
        pos="fixed"
        top={0}
        left={0}
        right={0}
        width="100%"
        h="64px"
        bg="blurred-overlay"
        backdropFilter="blur(20px)"
        py={2}
        pr={2}
        pl={4}
        zIndex={10}
        justify="space-between"
      >
        <Heading
          as="h1"
          fontSize={32}
          fontWeight="semibold"
          fontFamily="heading"
        >
          rammble
        </Heading>
        <Image rounded="8px" src="https://picsum.photos/48" boxSize="48px" />
      </HStack>
      <VStack w="100%" pt="72px">
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
        <Box bg="#15151F" h="134px" w="100%" />
      </VStack>
    </>
  )
}
