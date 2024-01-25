import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import React, { FC } from 'react'
import { Navigation } from 'src/components/Navigation'
import { FakeFeedPosts } from 'src/utils/placeholder.data'
import { SettingsLayout } from 'src/layouts/SettingsLayout'
import { SettingNavButtons } from 'src/components/Settings/SettingNavigationButtons'
import { useRouter } from 'next/router'
import { SettingsButton } from 'src/components/Settings/SettingsButton'
import { SettingsPages } from 'src/utils/SettingsPages'
import { Tag } from '@chakra-ui/react'

const SettingsPage: FC = () => {
  const router = useRouter()

  const { category } = router.query
  const user = FakeFeedPosts[0].user
  const pageData = SettingsPages[category as keyof typeof SettingsPages]
  const subPages = pageData?.subPages

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
            @{user?.username}
          </Text>
          <Text color={'ui.40'} fontWeight={400}>
            {pageData?.page?.description}
          </Text>
        </Box>

        <VStack>
          {subPages?.map((subPage, i) => {
            return <SettingsButton page={subPage} />
          })}
          {(subPages?.length === 0 || !subPages) && (
            <Tag colorScheme={'red'} mt={5} p={5} color={'ui.40'}>
              Uh ohhhhhhh... looks like we don't have any options for this right
              now!
            </Tag>
          )}
        </VStack>
      </Box>
    </SettingsLayout>
  )
}

export default SettingsPage
