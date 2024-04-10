'use client'

import { Box, Flex, VStack } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { FC } from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export interface ProfileHeroBannerProps {}

export const ProfileHeroBanner: FC<ProfileHeroBannerProps> = () => {
  return (
    <Box position={'relative'}>
      <Box
        zIndex={0}
        position={'absolute'}
        inset={0}
        boxSize={'full'}
        opacity={0.5}
        filter={'blur(132px)'}
        backgroundSize={'cover'}
        bgImage="https://s3-alpha-sig.figma.com/img/fdaf/09c7/d1e469c6f7161bb69c19ecf349bb891e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=olLwfGq7OtcLKFo5qZ5jisatDtr-XmYAb4T758ptPAsTUYnjbidowqqRxQYy852KL3gDxhYdu0qHcP4FYB9JM2~Gm9~1brYH7gdSO1gnDDV8MZuz-sHYCs2kY6AG-vQbr64P~NvdwrfU-gPLZItqwduIapEAcaBQfXZN30sfnKaqPo~dCF4nMKc7nJI4qIDLqbbplFcRVlsNa3zIsFpJWCrgjdbCrTY012bKB1hQFbNwOCsz11fsnzbavU4w9MMF2GjBCa56hbhLHrQwZXk8FcefMX~OFX96ag7XbOO8oDrd0elp6mQU2rcySwQHN7hyWqEYh9agK8wypmD0aM6Ruw__"
        rounded="24px 8px"
      />
      <VStack
        backgroundSize={'cover'}
        zIndex={1}
        bgImage="https://s3-alpha-sig.figma.com/img/fdaf/09c7/d1e469c6f7161bb69c19ecf349bb891e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=olLwfGq7OtcLKFo5qZ5jisatDtr-XmYAb4T758ptPAsTUYnjbidowqqRxQYy852KL3gDxhYdu0qHcP4FYB9JM2~Gm9~1brYH7gdSO1gnDDV8MZuz-sHYCs2kY6AG-vQbr64P~NvdwrfU-gPLZItqwduIapEAcaBQfXZN30sfnKaqPo~dCF4nMKc7nJI4qIDLqbbplFcRVlsNa3zIsFpJWCrgjdbCrTY012bKB1hQFbNwOCsz11fsnzbavU4w9MMF2GjBCa56hbhLHrQwZXk8FcefMX~OFX96ag7XbOO8oDrd0elp6mQU2rcySwQHN7hyWqEYh9agK8wypmD0aM6Ruw__"
        rounded="24px 8px"
        w="full"
        h="148px"
        p={2}
        align="start"
        justify="space-between"
      >
        <Flex>
          <IconButton
            size={'3'}
            variant={'soft'}
            bg={'neutral.3a'}
            rounded="99px"
            aria-label="Go Back"
            icon={<ArrowLeftIcon />}
          />
        </Flex>
      </VStack>
    </Box>
  )
}
