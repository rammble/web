import {VStack} from '@chakra-ui/layout'
import {FC} from 'react'
import {ExploreCard} from "src/components/client/Explore/ExploreCard";
import {TabsLayout} from "src/components/TabsLayout/TabsLayout";

const Page: FC = () => {

  const panels =  [[
    <ExploreCard displayName={'Xig'} name={'Xignotic'} description={'this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out'} count={'12.4k followers'}  imageUrl={'asd'}/>,
    <ExploreCard displayName={'Lizard'} name={'Lizard'} description={'asd'} count={'184.4k followers'} imageUrl={'asd'}/>,
    <ExploreCard displayName={'Xig'} name={'Xignotic'} description={'this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out'} count={'12.4k followers'}  imageUrl={'asd'}/>,,
    <ExploreCard displayName={'Xig'} name={'Xignotic'} description={'this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out, this is my epic bio, check me out'} count={'12.4k followers'}  imageUrl={'asd'}/>,

  ]]

  return (
    <VStack w="full" spacing={2} py="6">
      <TabsLayout
        heading={'Friends'}
        tabs={['Mutuals', 'Following', 'Followers']}
        panels={panels}
        search={{
          placeholder: 'Search for friends'
      }}/>
    </VStack>
  )
}

export default Page
