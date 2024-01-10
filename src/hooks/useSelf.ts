import {
  GetMeQuery,
  GetMeQueryHookResult,
  GetMeQueryResult,
  useGetMeQuery,
  useLoginMutation,
  useSignupMutation,
} from '@rammble/sdk'
import { useAuth } from 'src/providers/AuthProvider'
import { NotUndefined } from 'src/utils/types'
import { useRouter } from 'next/router'

export interface UseSelfOptions {
  redirectOnLogin?: string
  redirectOnLogout?: string
  redirectOnRegister?: string
}

export const useSelf = <
  TIsLoggedInOverride extends true | undefined = undefined,
>({
  redirectOnLogin,
  redirectOnRegister,
  redirectOnLogout,
}: UseSelfOptions = {}) => {
  const router = useRouter()
  const auth = useAuth()

  const { data: me, refetch, loading: isLoadingMeQuery } = useGetMeQuery()

  const [loginMutation, { loading: isLoadingLogin }] = useLoginMutation()
  const [signupMutation, { loading: isLoadingSignup }] = useSignupMutation()

  const gotoLogin = () => router.push('/login')
  const gotoRegister = () => router.push('/register')

  const login = async (username: string, password: string) => {
    if (!router.pathname.includes('login')) {
      await gotoLogin()
    }

    const { data } = await loginMutation({
      variables: {
        input: {
          username,
          password,
        },
      },
    })

    if (!data?.token) {
      throw new Error('Invalid credentials')
    }

    auth.setToken(data.token)

    await refetch()

    if (redirectOnLogin) {
      return router.push(redirectOnLogin)
    }

    return data.token
  }

  const logout = async () => {
    auth.setToken(undefined)
    auth.setRefresh(undefined)
    await refetch()

    if (redirectOnLogout) {
      return router.push(redirectOnLogout)
    }

    return router.push('/')
  }

  const signup = async (email: string, username: string, password: string) => {
    if (!router.pathname.includes('register')) {
      await gotoRegister()
    }

    const { data } = await signupMutation({
      variables: {
        input: {
          email,
          username,
          password,
        },
      },
    })

    if (!data?.token) {
      throw new Error('Invalid credentials')
    }

    auth.setToken(data.token)

    await refetch()

    if (redirectOnRegister) {
      return router.push(redirectOnRegister)
    }

    return data.token
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
      logout,
      signup,
      gotoLogin,
      gotoRegister,
    },
  ] as const
}
