import { FC, useMemo, useState } from 'react'
import { AuthLayout } from 'src/components/AuthLayout'
import { Box, Flex } from '@chakra-ui/layout'
import { InputField } from 'src/components/AuthLayout/InputField'
import { Button } from '@chakra-ui/button'
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import ConnectionFields from 'src/components/AuthLayout/Connections/ConnectionFields'
import {
  AbsoluteCenter,
  Divider,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from '@chakra-ui/react'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { OneTimePasswordTab } from 'src/components/AuthLayout/Tabs/OneTimePassword'
import { AuthCompleteTab } from 'src/components/AuthLayout/Tabs/AuthCompleteTab'
import { useRouter } from 'next/router'

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
    maxLength: 32,
    options: {
      hasForgotPassword: true,
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
]

const SignUpPage: FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 1200px)')
  const [tabIndex, setTabIndex] = useState(0)
  const router = useRouter()
  const isPasswordReset = router.query?.isReset
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
  }

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }

  const inputFields = useMemo(
    () =>
      fields.map((f, i) => {
        return (
          <InputField
            key={i}
            register={register}
            field={f}
            errors={getErrorByTitle(f.title)}
            watchValue={watch(f.title as any)}
          />
        )
      }),
    [],
  )

  return (
    <AuthLayout heading={'Welcome back'} isMobile={isMobile}>
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
                  <Box>{inputFields}</Box>
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
                    Get Rambling
                  </Button>
                  {isMobile && (
                    <Box
                      position="relative"
                      paddingTop="5"
                      paddingBottom="5"
                      bg={'bg.darker'}
                    >
                      <Divider borderColor={'ui.20'} w={'full'} />
                      <AbsoluteCenter
                        color={'ui.20'}
                        flexDir={'row'}
                        bg={'bg.darker'}
                        px="4"
                        fontWeight={500}
                        fontSize={'14px'}
                      >
                        or continue with
                      </AbsoluteCenter>
                    </Box>
                  )}
                  <ConnectionFields isSignUpPage={false} />
                </Flex>
              </form>
            </Box>
          </TabPanel>
          <TabPanel>
            <OneTimePasswordTab setTabIndex={setTabIndex} user={user} />
          </TabPanel>
          <TabPanel>
            <AuthCompleteTab user={user} otpCode={'124214'} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AuthLayout>
  )
}

export default SignUpPage
