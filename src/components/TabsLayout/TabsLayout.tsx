import React, {FC, ReactNode} from "react";
import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {Box, Heading, HStack, Text, VStack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";

export interface TabsLayoutProps {
  heading: string
  search: {
    placeholder: string
    onSearch?: () => void
  }
  tabs?: String[]
  panels?: ReactNode[]
}

export const TabsLayout: FC<TabsLayoutProps> = ({heading, search, tabs, panels}) => {
  return (
    <Tabs gap="8" size="2">
      <TabList w={'full'} justifyContent={'space-between'}>
        <Heading textStyle={'7'} color={'accent.11'}>
          {heading}
        </Heading>
        <HStack>
          {tabs?.map((tab, key) => <Tab key={key}>
              {tab}
            </Tab>
          )}
        </HStack>
      </TabList>
      <TabIndicator />
      <VStack align={'flex-start'} spacing={4}>
        <Input h={7} borderRadius={3} placeholder={`${search?.placeholder}...` || 'Search something...'}/>
        <VStack align={'flex-start'} w={'full'}>
          <Text textStyle={'3'}>
            Results
          </Text>
          <TabPanels>
            {panels?.map((panel, key) => <TabPanel key={key}>
              <VStack>
                {panel}
              </VStack>
            </TabPanel>)}
          </TabPanels>
        </VStack>
      </VStack>
    </Tabs>
  )
}
