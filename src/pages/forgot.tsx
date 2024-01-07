import { FC, useMemo, useState } from 'react'
import { AuthLayout } from 'src/components/AuthLayout'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout'
import { InputField } from 'src/components/AuthLayout/InputField'
import { Button } from '@chakra-ui/button'
import {
  SubmitHandler,
  RegisterOptions,
  useForm,
  FieldValues,
} from 'react-hook-form'
import ConnectionFields from 'src/components/AuthLayout/Connections/ConnectionFields'
import {
  AbsoluteCenter,
  Checkbox,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from '@chakra-ui/react'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import OneTimePasswordTab from 'src/components/AuthLayout/Tabs/OneTimePassword'
import { AuthCompleteTab } from 'src/components/AuthLayout/Tabs/AuthCompleteTab'
import { useRouter } from 'next/router'
import { ResetPasswordTab } from 'src/components/AuthLayout/Tabs/ResetPasswordTab'

export interface ISignUpFieldOptions {
  hasLengthCounter?: boolean
  hasPasswordStrength?: boolean
}

export interface ISignUpField {
  title: string
  type: string
  maxLength?: number
  options?: ISignUpFieldOptions
  validations: RegisterOptions
}

const fields = [
  {
    title: 'username',
    type: 'text',
    validations: {
      pattern: {
        value: /^\S*$/,
        message: ' This field cannot include spaces.',
      },
      required: 'This field is required',
      maxLength: { value: 32, message: 'Your username is too long' },
    },
  },
  {
    title: 'password',
    type: 'password',
    maxLength: 128,
    options: {
      hasPasswordStrength: true,
    },
    validations: {
      pattern: {
        value: /^\S*$/,
        message: ' This field cannot include spaces.',
      },
      required: 'This field is required',
      maxLength: { value: 32, message: 'Your password is too long' },
    },
  },
  {
    title: 'confirm password',
    type: 'password',
    maxLength: 32,
    validations: {
      pattern: {
        value: /^\S*$/,
        message: ' This field cannot include spaces.',
      },
      required: 'This field is required',
      maxLength: { value: 32, message: 'Your password is too long' },
    },
  },
]

const ForgotPasswordPage: FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 1200px)')
  const router = useRouter()
  const [tabIndex, setTabIndex] = useState(0)
  const user = FakeFeedPosts[0].user
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>()

  function getErrorByTitle(title: string) {
    return errors[title as keyof typeof errors]
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    router.push({
      pathname: '/signin',
      query: { isReset: true },
    })
  }

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }

  return (
    <AuthLayout heading={'Reset your password'} isMobile={isMobile}>
      <Tabs onChange={handleTabsChange} index={tabIndex}>
        <TabPanels>
          <TabPanel>
            <Box gap={4} w={'350px'}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex
                  h={'full'}
                  w={'full'}
                  flexDir={'column'}
                  justifyContent={'space-evenly'}
                  gap={'20px'}
                >
                  <Text fontWeight={400} fontSize={'16px'}>
                    Now that you have confirmed it is you, let’s make a new
                    password that you wont forget!
                  </Text>
                  <Box>
                    {fields.map((f, i) => {
                      return (
                        <InputField
                          key={i}
                          register={register}
                          field={f}
                          errors={getErrorByTitle(f.title)}
                          watchValue={watch(f.title as any)}
                        />
                      )
                    })}
                  </Box>
                  <Button
                    onClick={() => setTabIndex(1)}
                    textTransform={'uppercase'}
                    variant={'filled'}
                    type={'submit'}
                    fontWeight={600}
                    fontSize={'20px'}
                    color={'brand'}
                    borderColor={'brand.darkest'}
                    border={'2px solid'}
                    borderRadius={'8px'}
                    bg={'brand.darkest'}
                    p={'16px'}
                  >
                    Reset Password
                  </Button>
                </Flex>
              </form>
            </Box>
          </TabPanel>
          <TabPanel>
            <ResetPasswordTab user={user} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AuthLayout>
  )
}

export default ForgotPasswordPage
