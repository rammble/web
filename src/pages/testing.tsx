import { Button } from '@chakra-ui/button'
import { Heading, HStack, VStack, Wrap } from '@chakra-ui/layout'
import { Avatar, InputLeftElement, useColorMode } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { SearchIcon } from 'src/icons/SearchIcon'
import { CloseIcon } from 'src/icons/CloseIcon'
import { Textarea } from '@chakra-ui/textarea'

export default function TestingPage() {
  const sizes = ['1', '2', '3', '4']
  const schemes = ['accent', 'neutral', 'error', 'success', 'warn', 'info']
  const variants = ['solid', 'outline', 'ghost', 'soft']

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack>
      <HStack>
        <Avatar size="1" name="Test" />
        <Avatar size="2" name="Test" />
        <Avatar size="3" name="Test Name" />
        <Avatar size="4" name="Test" src="https://picsum.photos/200" />
        <Avatar size="5" name="Test" colorScheme="error" />
        <Avatar size="6" name="Test" colorScheme="success" />
        <Avatar size="7" name="Test" colorScheme="info" />
        <Avatar size="8" name="Test" colorScheme="neutral" />
        <Avatar size="9" name="Test" colorScheme="warn" />
      </HStack>
      <HStack>
        <Avatar size="1" variant="soft" name="Test" />
        <Avatar size="2" variant="soft" name="Test" />
        <Avatar size="3" variant="soft" name="Test" />
        <Avatar
          size="4"
          variant="soft"
          name="Test"
          src="https://picsum.photos/200"
        />
        <Avatar size="5" variant="soft" name="Test" colorScheme="error" />
        <Avatar size="6" variant="soft" name="Test" colorScheme="success" />
        <Avatar size="7" variant="soft" name="Test" colorScheme="info" />
        <Avatar size="8" variant="soft" name="Test" colorScheme="neutral" />
        <Avatar size="9" variant="soft" name="Test" colorScheme="warn" />
      </HStack>
      <VStack>
        <InputGroup variant="outline" size="1">
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="Search for something..." colorScheme="error" />
          <InputRightElement>
            <CloseIcon />
          </InputRightElement>
        </InputGroup>
        <InputGroup variant="outline" size="2">
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="Search for something..." colorScheme="success" />
          <InputRightElement>
            <CloseIcon />
          </InputRightElement>
        </InputGroup>
        <InputGroup variant="outline" size="3">
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="Search for something..." colorScheme="info" />
          <InputRightElement>
            <CloseIcon />
          </InputRightElement>
        </InputGroup>

        <Input
          variant="soft"
          size="1"
          placeholder="Search for something..."
          colorScheme="warn"
        />
        <Input variant="soft" size="2" placeholder="Search for something..." />
        <Input variant="soft" size="3" placeholder="Search for something..." />

        <Textarea
          h="68px"
          variant="soft"
          size="1"
          placeholder="Search for something..."
        />
        <Textarea
          h="68px"
          variant="soft"
          size="2"
          placeholder="Search for something..."
        />
        <Textarea
          h="68px"
          variant="soft"
          size="3"
          placeholder="Search for something..."
          colorScheme="error"
        />

        <Textarea
          h="68px"
          variant="outline"
          size="1"
          placeholder="Search for something..."
        />
        <Textarea
          h="68px"
          variant="outline"
          size="2"
          placeholder="Search for something..."
        />
        <Textarea
          h="68px"
          variant="outline"
          size="3"
          placeholder="Search for something..."
          colorScheme="error"
        />
      </VStack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Wrap spacing={8}>
        {schemes.map((scheme) => (
          <VStack align="start" key={scheme}>
            <Heading textStyle="7" fontWeight="bold">
              {scheme.toUpperCase()}
            </Heading>
            <Wrap spacing={2}>
              {sizes.map((size) => (
                <VStack align="start" key={size}>
                  <Heading textStyle="6" fontWeight="medium">
                    Size {size}
                  </Heading>
                  <VStack spacing={1} align="start" p={2}>
                    {variants.map((variant) => (
                      <Button
                        key={`${scheme}-${variant}-${size}`}
                        size={size}
                        colorScheme={scheme}
                        variant={variant}
                      >
                        {scheme}-{variant}-{size}
                      </Button>
                    ))}
                  </VStack>
                </VStack>
              ))}
            </Wrap>
          </VStack>
        ))}
      </Wrap>
    </VStack>
  )
}
