import { Meta } from '@storybook/react'
import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'

const meta = {
  title: 'Chakra/Components/Button',
} satisfies Meta

export const _Button = () => (
  <VStack>
    <Button>default</Button>
    <Button size="1">size (1)</Button>
    <Button size="2">size (2)</Button>
    <Button size="3">size (3)</Button>
    <Button variant="solid">solid</Button>
    <Button variant="soft">soft</Button>
    <Button variant="outline">outline</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="solid" colorScheme="neutral">
      solid
    </Button>
    <Button variant="solid" colorScheme="error">
      scheme: error
    </Button>
    <Button variant="solid" colorScheme="accent">
      scheme: accent
    </Button>
    <Button disabled variant="solid" size="4">
      disabled
    </Button>
  </VStack>
)

export default meta
