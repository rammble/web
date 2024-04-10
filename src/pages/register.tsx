import { FC, useCallback } from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { LogoIcon } from 'src/icons/LogoIcon'
import { Link } from '@chakra-ui/next-js'
import { Button, IconButton } from '@chakra-ui/button'
import { DiscordIcon } from 'src/icons/DiscordIcon'
import { Divider } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { GoogleIcon } from 'src/icons/GoogleIcon'
import { AuthLayout } from 'src/layouts/AuthLayout'
import { Cross1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useSignupMutation } from '@rammble/sdk'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@storybook/router'
import { useRouter } from 'next/router'

const RegisterFormSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
})

type FormData = z.infer<typeof RegisterFormSchema>

const RegisterPage: FC = () => {
  const [signup] = useSignupMutation()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const onSubmit = useCallback((data: FormData) => {
    signup({
      variables: {
        input: data,
      },
    }).then((res) => {
      if (res.data?.token) {
        router.push('/login')
      }
    })
  }, [])

  return (
    <AuthLayout>
      <HStack boxSize="full" px="256px" py="96px" justify="space-between">
        <VStack spacing={6}>
          <LogoIcon h="60px" w="225px" />
          <VStack
            as="form"
            w="340px"
            bg="rgba(29, 29, 33, 0.70)"
            backdropFilter="blur(20px)"
            rounded={6}
            p={6}
            pt={5}
            border="1px solid"
            borderColor="neutral.5a"
            spacing={6}
            onSubmit={handleSubmit(onSubmit)}
          >
            <HStack spacing={1}>
              <Text textStyle="2" fontWeight="regular" color="neutral.9a">
                Already have an account?
              </Text>
              <Link
                href="/login"
                textStyle="2"
                fontWeight="regular"
                color="accent.11a"
              >
                Login
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
                icon={<Cross1Icon />}
              />
              <IconButton
                w="full"
                variant="soft"
                colorScheme="neutral"
                size="3"
                aria-label="Discord"
                icon={<MagnifyingGlassIcon />}
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
            <VStack w="full" spacing={4}>
              <Input
                size="3"
                type="email"
                placeholder="Email"
                {...register('email')}
              />
              <Input
                size="3"
                type="text"
                placeholder="Username"
                {...register('username')}
              />
              <Input
                size="3"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                {...register('password')}
              />
            </VStack>
            <HStack justify="space-between" w="full">
              <Box />
              <Button
                type="submit"
                colorScheme="accent"
                size="2"
                variant="solid"
              >
                Create Account
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </AuthLayout>
  )
}

export default RegisterPage
