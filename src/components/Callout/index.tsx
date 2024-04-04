import { forwardRef } from '@chakra-ui/system'
import { Flex, HStack, StackProps } from '@chakra-ui/layout'
import { InfoIcon } from 'src/icons/InfoIcon'
import { FC, memo } from 'react'

export interface CalloutProps {
  type?: 'filled' | 'outline'
  variant: 'info' | 'warning' | 'error' | 'neutral' | 'success'
}

// TODO: change the icons at a later date
const VariantIcon: FC<{ variant: CalloutProps['variant'] }> = memo(
  ({ variant }) => {
    if (variant === 'info' || variant === 'neutral')
      return <InfoIcon w="4" h="4" />
    if (variant === 'warning') return <InfoIcon w="4" h="4" />
    if (variant === 'error') return <InfoIcon w="4" h="4" />
    if (variant === 'success') return <InfoIcon w="4" h="4" />
  },
)

export const Callout = forwardRef<StackProps & CalloutProps, typeof HStack>(
  ({ type = 'filled', variant, children, ...props }, ref) => {
    const isFilled = type === 'filled'
    return (
      <HStack
        ref={ref}
        {...props}
        p="3"
        rounded="3"
        spacing="2"
        align="start"
        bg={isFilled ? `${variant}.3a` : 'transparent'}
        border={isFilled ? 'none' : `2px solid`}
        borderColor={isFilled ? 'none' : `${variant}.3a`}
        color={`${variant}.12`}
      >
        <Flex flexShrink={0} py="2px">
          <VariantIcon variant={variant} />
        </Flex>
        {children}
      </HStack>
    )
  },
)
