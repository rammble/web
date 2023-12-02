import { FC } from 'react'
import { Box, HStack } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { FeedButton } from 'src/components/FeedPost/FeedButton'
import { ShareIcon } from 'src/icons/ShareIcon'
import { ThreeDotsIcon } from '../../icons/ThreeDotsIcon'
import {
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  IconProps,
  useDisclosure,
} from '@chakra-ui/react'
import { TrashIcon } from '../../icons/TrashIcon'
import { ThumbsDownIcon } from '../../icons/ThumbsDownIcon'
import { EmptyStarIcon } from '../../icons/EmptyStarIcon'
import { FilledStarIcon } from '../../icons/FilledStarIcon'
import { AddUserIcon } from '../../icons/AddUserIcon'
import { WarningIcon } from '../../icons/WarningIcon'

const options = [
  {
    type: 'stateful',
    title: 'Pin to profile',
    icon: EmptyStarIcon,
    color: 'brand',
    active: {
      title: 'Unpin from profile',
      icon: FilledStarIcon,
    },
  },
  {
    type: 'item',
    title: 'Not Interested in this Post',
    icon: ThumbsDownIcon,
  },
  {
    type: 'item',
    title: 'Follow @user',
    icon: AddUserIcon,
  },
  {
    type: 'item',
    title: 'Report Post',
    icon: WarningIcon,
  },
  {
    type: 'splitter',
  },
  {
    type: 'dangerous',
    title: 'Delete Post',
    icon: TrashIcon,
  },
]

export const FeedMenu: FC = ({}) => {
  const disclosure = useDisclosure()

  return (
    <Menu isLazy {...disclosure}>
      <FeedButton
        as={MenuButton}
        icon={<ThreeDotsIcon boxSize={5} />}
        ariaLabel="Menu"
        color="ui.100"
        onClick={disclosure.onToggle}
        isActive={disclosure.isOpen}
      />
      <MenuList
        borderRadius={16}
        bg="blurp.darker"
        p={2}
        zIndex={20}
        border="none"
      >
        {options.map((item, i) => {
          if (item.type === 'splitter') {
            return <MenuDivider key={i} borderColor="ui.5" borderWidth={2} />
          }

          if (item.type === 'item' || item.type === 'dangerous') {
            return (
              <MenuItem
                bg="unset"
                key={i}
                color={item.type === 'dangerous' ? 'accent.red' : 'ui.60'}
                _hover={{
                  bg: 'ui.3',
                  color: item.type === 'dangerous' ? 'accent.red' : 'ui.100',
                }}
                icon={<Icon as={item.icon} boxSize={5} color="inherit" />}
                py={2}
                pl={3}
                pr={4}
                borderRadius={8}
              >
                {item.title}
              </MenuItem>
            )
          }

          return (
            <MenuItem
              bg="unset"
              color="ui.60"
              _hover={{
                bg: 'ui.3',
                color: item.color,
              }}
              key={i}
              icon={<Icon as={item.icon} boxSize={5} />}
              py={2}
              pl={3}
              pr={4}
              borderRadius={8}
            >
              {item.title}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
