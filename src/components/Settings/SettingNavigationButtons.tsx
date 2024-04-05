import React from 'react'
import { Box, VStack } from '@chakra-ui/layout'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { SettingsButton } from 'src/components/Settings/SettingsButton'
import { SettingsPages } from 'src/utils/SettingsPages'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Icon } from '@chakra-ui/react'

export const SettingNavButtons = () => {
  return (
    <VStack w={'full'} gap={4}>
      <InputGroup>
        <Input placeholder={'Search settings...'} border={'input'} />
        <InputRightElement>
          <Icon as={MagnifyingGlassIcon} boxSize={5} cursor={'pointer'} />
        </InputRightElement>
      </InputGroup>
      <Box w={'full'}>
        {Object.values(SettingsPages).map((p, i) => {
          return <SettingsButton key={i} page={p.page} />
        })}
      </Box>
    </VStack>
  )
}
