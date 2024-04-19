import { MainLayout } from 'src/layouts/MainLayout'
import { Navigation } from 'src/components/client/Navigation'
import { NextPage } from 'next'
import React, { FC } from 'react'
import { Heading, Text, VStack } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/react'
import { ArticlesNavigation } from 'src/components/client/Articles/ArticlesNavigation'
import { MarkdownField } from 'src/components/client/Markdown/MarkdownField'
import { Callout } from 'src/components/client/Callout'

const markdown = `
1. [Who we are](#who-we-are)
2. [Age requirements and responsibility of parents and legal guardians](#title)
3. [What you can expect from us](#title)
4. [Your Rammble account](#title)
5. [Content in Rammble’s services](#title)
    - [Your Content](#title)
    - [Rammble’s Content](#title)
    - [Other content](#title)
6. [Software in Rammble’s services](#title)
7. [Copyright](#title)
8. [Rammble's Paid Services](#title)
9. [Restrictions on your use of Rammble’s services](#title)
10. [Termination](#title)
11. [Appeals](#title)
12. [Indemnity](#title)
13. [Services “AS IS”](#title)

Welcome! Rammble is a platform that brings people together over shared experiences and gives everyone a place to belong. We’re happy you’re here.

These terms set forth our legal obligations to each other. They apply to your use of our services.

## Who we are
`
const Page: FC = () => {
  return (
    <VStack w="full" spacing={2} py="6" alignItems={'flex-start'}>
      <Heading textStyle={'7'} color={'accent.11'}>
        Terms and Conditions
      </Heading>
      <Divider height={'1px'} mt={4} mb={2} bg="neutral.3a" />
      <Callout variant={'neutral'} w={'full'} type={'outline'}>
        <Text>Effective 2nd May 2022</Text>
      </Callout>
      <Callout variant={'info'} w={'full'} type={'outline'}>
        <Text>Last updated on 31st October 2024 at 12:34:31 PM</Text>
      </Callout>
      <MarkdownField text={markdown} />
    </VStack>
  )
}

export default Page
