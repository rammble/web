import { Button } from '@chakra-ui/button'
import { Heading, VStack, Wrap } from '@chakra-ui/layout'
import { Tooltip, useColorMode } from '@chakra-ui/react'

export default function TestingPage() {
  const sizes = ['1', '2', '3', '4']
  const schemes = ['accent', 'neutral', 'error', 'success', 'warn', 'info']
  const variants = ['solid', 'outline', 'ghost', 'soft']

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack>
      <Tooltip label={'hi hahahahah'} hasArrow>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Tooltip>

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
