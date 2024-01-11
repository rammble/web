import {
  GetMeQueryResult,
  useGetMeQuery,
  useLoginMutation,
  useSignupMutation,
} from '@rammble/sdk'
import { NotUndefined } from 'src/utils/types'
import { useRouter } from 'next/router'

export interface UseSelfOptions {
  redirectOnLogin?: string
  redirectOnRegister?: string
}

export const useSelf = <
  TIsLoggedInOverride extends true | undefined = undefined,
>({ redirectOnLogin, redirectOnRegister }: UseSelfOptions = {}) => {
  const router = useRouter()

  const { data: me, loading: isLoadingMeQuery } = useGetMeQuery()

  const [loginMutation, { loading: isLoadingLogin }] = useLoginMutation()
  const [signupMutation, { loading: isLoadingSignup }] = useSignupMutation()

  const gotoLogin = () => router.push('/login')
  const gotoRegister = () => router.push('/register')

  const login = async (username: string, password: string) => {
    if (!router.pathname.includes('login')) {
      await gotoLogin()
    }

    await loginMutation({
      variables: {
        input: {
          username,
          password,
        },
      },
    })

    if (redirectOnLogin) {
      return router.push(redirectOnLogin)
    }
  }

  const signup = async (email: string, username: string, password: string) => {
    if (!router.pathname.includes('register')) {
      await gotoRegister()
    }

    await signupMutation({
      variables: {
        input: {
          email,
          username,
          password,
        },
      },
    })

    if (redirectOnRegister) {
      return router.push(redirectOnRegister)
    }
  }

  const data = me?.me
    ? ({
        ...me.me,
        isLoggedIn: true,
      } as NotUndefined<GetMeQueryResult['data']>['me'] & {
        isLoggedIn: true
      })
    : ({
        isLoggedIn: false,
      } as {
        isLoggedIn: false
      })

  const final = data as TIsLoggedInOverride extends true
    ? NotUndefined<NotUndefined<GetMeQueryResult['data']>['me']> & {
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
