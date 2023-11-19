import {FC} from "react";
import {Box, HStack} from "@chakra-ui/layout";
import {Button, IconButton} from "@chakra-ui/button";
import {ThreeDotsIcon} from "../../icons/ThreeDotsIcon";
import {Icon, Menu, MenuButton, MenuItem, MenuList, MenuDivider, IconProps} from "@chakra-ui/react";
import {TrashIcon} from "../../icons/TrashIcon";
import {ThumbsDownIcon} from "../../icons/ThumbsDownIcon";
import {EmptyStarIcon} from "../../icons/EmptyStarIcon";
import {FilledStarIcon} from "../../icons/FilledStarIcon";
import {AddUserIcon} from "../../icons/AddUserIcon";
import {WarningIcon} from "../../icons/WarningIcon";

const options = [
  {
    title: 'Unpin from Profile',
    icon: FilledStarIcon
  },
  {
    title: 'Pin to Profile',
    icon: EmptyStarIcon
  },
  {
    title: 'Not Interested in this Post',
    icon: ThumbsDownIcon
  },
  {
    title: 'Follow @user',
    icon: AddUserIcon
  },
  {
    title: 'Report Post',
    icon: WarningIcon,
    isDangerous: true
  },
  {
    title: 'Delete Post',
    isDangerous: true,
    icon: TrashIcon
  }
]


export const FeedMenu: FC = ({}) => {
  return (
      <Menu  isLazy>
        <MenuButton
            variant={'unstyled'}
            as={IconButton}
            aria-label="Menu"
            color="ui.40"
            icon={
              <ThreeDotsIcon
                  boxSize="32px"
                  transition="all 0.05s ease-in-out"
              />
            }
            _active={{
              color: 'ui',
            }}
        />
        <MenuList borderRadius={16} bg={'blurp.darker'} p={3} zIndex={100}>
          {options.map((d, i) => {
            return <Box key={i}>
              {d.isDangerous && <MenuDivider bg={'ui.5'} mb={1} mt={1}/>}
              <MenuItem
                  bg={'none'}
                  icon={<Icon boxSize={5} as={d.icon}/>}
                  p={2} borderRadius={5}
                  _hover={{bg: d?.isDangerous ? 'accent.red' : 'ui.3'}}
                  _active={{bg: 'blurp.lighter'}}
              >{d.title}</MenuItem>
            </Box>
          })}
        </MenuList>
      </Menu>
  )
}
