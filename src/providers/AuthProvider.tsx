import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'

export interface AuthContextData {
  token?: string
  refresh?: string

  setToken: (token: string | undefined) => void
  setRefresh: (refresh: string | undefined) => void
}

export const AuthContext = createContext<AuthContextData>({
  token: undefined,
  refresh: undefined,

  setToken: () => {},
  setRefresh: () => {},
})

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string>()
  const [refresh, setRefresh] = useState<string>()

  return (
    <AuthContext.Provider
      value={{
        token,
        refresh,
        setToken,
        setRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
