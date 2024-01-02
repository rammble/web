import {FC} from "react";
import {AuthLayout} from "src/components/AuthLayout/index";
import {Box, Center, Flex, Heading, Text} from "@chakra-ui/layout";
import {InputField} from "src/components/AuthLayout/InputField";
import {Button} from "@chakra-ui/button";
import {SubmitHandler, RegisterOptions, useForm, FieldValues} from "react-hook-form";
import ConnectionFields from "src/components/AuthLayout/Connections/ConnectionFields";
import {AbsoluteCenter, Checkbox, Divider, useMediaQuery} from "@chakra-ui/react";

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
    title: "email",
    type: "text",
    validations: {
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "This field contains an invalid email",
      },
      required: "This field is required",
    }
  },
  {
    title: "username",
    type: "text",
    maxLength: 32,
    options: {
      hasLengthCounter: true
    },
    validations: {
      pattern: {
        value: /^\S*$/,
        message: " This field cannot include spaces."
      },
      required: "This field is required",
      maxLength: {value: 32, message: "Your username is too long"}
    }
  },
  {
    title: "password",
    type: "password",
    maxLength: 128,
    options: {
      hasPasswordStrength: true
    },
    validations: {
      pattern: {
        value: /^\S*$/,
        message: " This field cannot include spaces."
      },
      required: "This field is required",
      maxLength: {value: 32, message: "Your password is too long"}
    }
  }
]

const SignUpPage: FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 1200px)')

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<FieldValues>()

  function getErrorByTitle(title: string) {
    return errors[title as keyof typeof errors]
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (
    <AuthLayout heading={'Create your account'} isMobile={isMobile}>
      <Box gap={'16px'} w={'350px'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex h={'100%'} w={'100%'} flexDir={'column'} justifyContent={'space-evenly'} gap={'20px'}>
            <Box>
              {fields.map((f, i) => {
                return <InputField
                  key={i}
                  register={register}
                  field={f}
                  errors={getErrorByTitle(f.title)}
                  watchValue={watch(f.title as any)}
                />
              })}
            </Box>
            <Checkbox borderColor={'blurp.lighter'} _checked={{"& .chakra-checkbox__control": {background: "brand", border: "brand"}}} size={'lg'} {...register('termsOfService')} gap={'12px'}>
              <Flex fontWeight={400} fontSize={'14px'} color={'ui.40'} flexWrap={'wrap'} gap={1}>
                <Text>I acknowledge and agree to Rammble's</Text>
                <Text color={'brand'}>
                  Terms and Conditions
                </Text>
                <Text>
                  and
                </Text>
                <Text color={'brand'}>
                  Privacy Policy
                </Text>
              </Flex>
            </Checkbox>
            <Button
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
              Get Started
            </Button>
            {isMobile && <Box position='relative' paddingTop='5' paddingBottom='5' bg={'bg.darker'}>
              <Divider borderColor={'ui.20'} w={'100%'}/>
              <AbsoluteCenter color={'ui.20'} flexDir={'row'} bg={'bg.darker'} px='4' fontWeight={500}
                              fontSize={'14px'}>
                or continue with
              </AbsoluteCenter>
            </Box>}
            <ConnectionFields isSignUpPage={true}/>
          </Flex>
        </form>
      </Box>
    </AuthLayout>
  )
}

export default SignUpPage
