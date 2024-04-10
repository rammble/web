import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { LogoIcon } from 'src/icons/LogoIcon'
import { Link } from '@chakra-ui/next-js'
import { Button, IconButton } from '@chakra-ui/button'
import { DiscordIcon } from 'src/icons/DiscordIcon'
import { Divider, Icon } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { GoogleIcon } from 'src/icons/GoogleIcon'
import { AuthLayout } from 'src/layouts/AuthLayout'
import { Cross1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

const SignUpPage: FC = () => {
  return (
    <AuthLayout>
      <HStack boxSize="full" px="256px" py="96px" justify="space-between">
        <VStack spacing={6}>
          <LogoIcon h="60px" w="225px" />
          <VStack
            w="340px"
            bg="rgba(29, 29, 33, 0.70)"
            backdropFilter="blur(20px)"
            rounded={6}
            p={6}
            pt={5}
            border="1px solid"
            borderColor="neutral.5a"
            spacing={6}
          >
            <HStack spacing={1}>
              <Text textStyle="2" fontWeight="regular" color="neutral.9a">
                Don't have an account?
              </Text>
              <Link
                href="/login"
                textStyle="2"
                fontWeight="regular"
                color="accent.11a"
              >
                Create one
              </Link>
            </HStack>
            <HStack w="full" spacing={1}>
              <IconButton
                w="full"
                variant="soft"
                colorScheme="neutral"
                size="3"
                aria-label="Discord"
                icon={<DiscordIcon boxSize="18px" />}
              />
              <IconButton
                w="full"
                variant="soft"
                colorScheme="neutral"
                size="3"
                aria-label="Discord"
                icon={<GoogleIcon boxSize="18px" />}
              />
              <IconButton
                w="full"
                variant="soft"
                colorScheme="neutral"
                size="3"
                aria-label="Discord"
                icon={<Icon as={Cross1Icon} boxSize="18px" />}
              />
              <IconButton
                w="full"
                variant="soft"
                colorScheme="neutral"
                size="3"
                aria-label="Discord"
                icon={<Icon as={MagnifyingGlassIcon} boxSize="18px" />}
              />
            </HStack>
            <HStack spacing={2} w="full">
              <Divider
                w="full"
                h="px"
                bg="neutral.3a"
                orientation="horizontal"
              />
              <Text textStyle="1" fontWeight="bold" color="neutral.5a">
                OR
              </Text>
              <Divider
                w="full"
                h="px"
                bg="neutral.3a"
                orientation="horizontal"
              />
            </HStack>
            <VStack as="form" w="full" spacing={4}>
              <Input size="3" type="text" placeholder="Username" />
              <Input
                size="3"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </VStack>
            <HStack justify="space-between" w="full">
              <Link href="/forgot-password" textStyle="2" color="accent.11a">
                Forgot Password?
              </Link>
              <Button colorScheme="accent" size="2" variant="solid">
                Login
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </AuthLayout>
  )
}

export default SignUpPage
