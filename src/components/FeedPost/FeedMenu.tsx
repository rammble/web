import {FC} from "react";
import {HStack} from "@chakra-ui/layout";
import {Button, IconButton} from "@chakra-ui/button";
import {ThreeDotsIcon} from "../../icons/ThreeDotsIcon";
import {Icon, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {TrashIcon} from "../../icons/TrashIcon";

const options = [
  {
    title: 'Pin to Profile',
  },
  {
    title: 'Not Interested in this Post',
  },
  {
    title: 'Follow @user',
  },
  {
    title: 'Report Post',
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
      <Menu isLazy>
        <MenuButton
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
        <MenuList spacing={5} borderRadius={16} bg={'blurp.darker'} p={3} zIndex={100}>
          {options.map((d: { title: string, isDangerous?: boolean, icon: JSX.Element }, i) => {
            return <MenuItem icon={<Icon boxSize={5} as={d.icon}/>} key={i} p={2} borderRadius={5} _hover={{bg: d?.isDangerous ? 'accent.red' : 'blurp.lighter'}}>{d.title}</MenuItem>
          })}
        </MenuList>
      </Menu>
  )
}
