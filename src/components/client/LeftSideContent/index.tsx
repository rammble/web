import React, { FC } from 'react'
import { Text, VStack } from '@chakra-ui/layout'
import { Callout } from 'src/components/client/Callout'
import { LeftSideWidget } from 'src/components/client/LeftSideContent/LeftSideWidget'

export interface LeftSideContentProps {}

export const LeftSideContent: FC<LeftSideContentProps> = () => {
  return (
    <VStack w="full" spacing="2" py="6">
      <Callout w="full" variant="accent">
        <VStack textStyle="2" fontWeight="regular">
          <Text>
            Hi welcome to Rammble! We value your feedback as we grow into a
            social media platform!
            <br />
            <br />
            <Text as="span" color="accent.8">
              Learn how you can help.
            </Text>
          </Text>
        </VStack>
      </Callout>
      <LeftSideWidget title="While You Were Gone" hasInfo infoUrl="#help">
        <Text>content</Text>
      </LeftSideWidget>
      <LeftSideWidget title="Trending Tags">
        <Text>content</Text>
      </LeftSideWidget>
      <LeftSideWidget title="Trending Ramblers">
        <Text>content</Text>
      </LeftSideWidget>
    </VStack>
  )
}
