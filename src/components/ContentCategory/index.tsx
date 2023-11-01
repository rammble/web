import { FC, PropsWithChildren } from 'react'
import { Heading, VStack } from '@chakra-ui/layout'

export interface ContentCategoryProps extends PropsWithChildren {
  title: string
}

export const ContentCategory: FC<ContentCategoryProps> = ({
  title,
  children,
}) => (
  <VStack w="full" align="start">
    <Heading as="h4" fontSize={16} fontWeight={500} color="ui.80">
      {title}
    </Heading>
    {children}
  </VStack>
)
