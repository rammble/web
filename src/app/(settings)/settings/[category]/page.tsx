'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { Navigation } from 'src/components/client/Navigation'
import { SettingsLayout } from 'src/layouts/SettingsLayout'
import { SettingNavButtons } from 'src/components/client/Settings/SettingNavigationButtons'
import { SettingsButton } from 'src/components/client/Settings/SettingsButton'
import { SettingsPages } from 'src/utils/SettingsPages'
import { Tag } from '@chakra-ui/react'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const Page: FC<CategoryPageProps> = ({ params }) => {
  const category = params.category

  const pageData = SettingsPages[category as keyof typeof SettingsPages]
  const subPages = pageData?.subPages

  const subPageIsEmpty = subPages?.length === 0 || !subPages

  return (
    <SettingsLayout
      renderLeftNode={() => <SettingNavButtons />}
      renderChatNode={() => null}
      renderRightNode={() => <Navigation />}
    >
      <Box w="full">
        <Box>
          <Heading fontSize={'16px'}>{pageData?.page?.title}</Heading>
          <Text color={'ui.40'} fontWeight={500}>
            {/* no placeholder data */}
          </Text>
          <Text color={'ui.40'} fontWeight={400}>
            {pageData?.page?.description}
          </Text>
        </Box>

        <VStack>
          {subPages?.map((subPage, i) => {
            return <SettingsButton page={subPage} />
          })}
          {subPageIsEmpty && (
            <Tag colorScheme={'error'} mt={5} p={5} color={'ui.40'}>
              Uh ohhhhhhh... looks like we don't have any options for this right
              now!
            </Tag>
          )}
        </VStack>
      </Box>
    </SettingsLayout>
  )
}

export default Page
