'use client'
import {
  useGetMeQuery,
  useLoginMutation,
  useSignupMutation,
} from '@rammble/sdk'
import { usePathname, useRouter } from 'next/navigation'

export interface UseSelfOptions {
  redirectOnLogin?: string
  redirectOnRegister?: string
}

export const useSelf = <
  TIsLoggedInOverride extends true | undefined = undefined,
>({ redirectOnLogin, redirectOnRegister }: UseSelfOptions = {}) => {
  const router = useRouter()
  const pathname = usePathname()

  const { data: me, isPending: isLoadingMeQuery } = useGetMeQuery({})

  const { mutateAsync: loginMutation, isPending: isLoadingLogin } =
    useLoginMutation()
  const { mutateAsync: signupMutation, isPending: isLoadingSignup } =
    useSignupMutation()

  const gotoLogin = () => router.push('/login')
  const gotoRegister = () => router.push('/register')

  const login = async (username: string, password: string) => {
    if (!pathname?.includes('login')) {
      gotoLogin()
    }

    await loginMutation({
      input: {
        username,
        password,
      },
    })

    if (redirectOnLogin) {
      return router.push(redirectOnLogin)
    }
  }

  const signup = async (email: string, username: string, password: string) => {
    if (!pathname?.includes('register')) {
      gotoRegister()
    }

    await signupMutation({
      input: {
        email,
        username,
        password,
      },
    })

    if (redirectOnRegister) {
      return router.push(redirectOnRegister)
    }
  }

  const data = me?.user
    ? ({
        ...me.user,
        isLoggedIn: true,
      } as any & {
        isLoggedIn: true
      })
    : ({
        isLoggedIn: false,
      } as {
        isLoggedIn: false
      })

  const final = data as TIsLoggedInOverride extends true
    ? any & {
        isLoggedIn: true
      }
    : typeof data

  return [
    {
      ...final,
      isLoading: isLoadingMeQuery || isLoadingLogin || isLoadingSignup,
    } as const,
    {
      login,
      signup,
      gotoLogin,
      gotoRegister,
    },
  ] as const
}
