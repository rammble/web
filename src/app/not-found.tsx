'use client'

import { MainLayout } from 'src/layouts/MainLayout'
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { AbsoluteCenter } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const Starfield = () => {
    const stars = Array.from({ length: 150 }, (_, i) => (
      <Box
        key={i}
        position="absolute"
        width={`2px`}
        height={`2px`}
        bg="neutral.10a"
        borderRadius="100%"
        top={`${Math.random() * 100}%`}
        left={`${Math.random() * 100}%`}
      />
    ))

    const starClusters = Array.from({ length: 200 }, (_, i) => {
      const clusterStars = Array.from({ length: 5 }, (_, j) => (
        <Box
          key={`${i}-${j}`}
          position="absolute"
          width={`1px`}
          height={`1px`}
          bg="neutral.10a"
          borderRadius="100%"
          top={`${Math.random() * 10 + i * 30}%`}
          left={`${Math.random() * 10 + i * 30}%`}
        />
      ))
      return clusterStars
    })

    return (
      <Box
        bgGradient={'linear-gradient(160deg, #51D2FD0D 30%, transparent 60%)'}
        position="absolute"
        top={0}
        left={0}
        width="full"
        height="full"
        overflow="hidden"
      >
        {stars}
        {starClusters}
      </Box>
    )
  }

  return (
    <MainLayout>
      <Starfield />
      <AbsoluteCenter>
        <VStack w={'full'} h={'full'}>
          <Heading
            fontSize={'128px'}
            fontWeight={'800'}
            bgClip={'text'}
            bgGradient={'linear-gradient(90deg, #52D4FF 0.3%, #2D87B4 100.3%)'}
          >
            404
          </Heading>

          <VStack w={'full'}>
            <Text
              color={'neutral.9a'}
              textStyle={'4'}
              textTransform={'uppercase'}
            >
              Not Found
            </Text>
            <Text>We couldn't find what you're looking for...</Text>
          </VStack>
          <HStack>
            <Button onClick={() => router.back()} size={'2'} variant={'soft'}>
              Go Back
            </Button>
            <Button
              onClick={() => router.push('/explore')}
              size={'2'}
              variant={'soft'}
            >
              Look for rammblers
            </Button>
          </HStack>
        </VStack>
      </AbsoluteCenter>
    </MainLayout>
  )
}
