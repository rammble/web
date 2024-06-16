import {Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useDisclosure,} from '@chakra-ui/react'
import {FC, useMemo} from 'react'
import {AddUserIcon} from 'src/icons/AddUserIcon'
import {ThumbsDownIcon} from 'src/icons/ThumbsDownIcon'
import {IconButton} from '@chakra-ui/button'
import {
  DotsHorizontalIcon,
  ExclamationTriangleIcon, HeartFilledIcon, HeartIcon,
  Pencil2Icon,
  TrashIcon,
} from '@radix-ui/react-icons'
import {Center} from '@chakra-ui/layout'
import {getGetMeQueryKey, useDeletePostMutation, useQueryClient,} from '@rammble/sdk'

export interface FeedMenuProps {
  postId: string
}

export const FeedMenu: FC<FeedMenuProps> = ({ postId }) => {
  const disclosure = useDisclosure()
  const queryClient = useQueryClient()
  const { mutateAsync: deletePost } = useDeletePostMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: getGetMeQueryKey({}),
      }),
  })

  const options = useMemo(
    () => [
      {
        type: 'item',
        title: 'Edit',
        icon: Pencil2Icon,
        color: 'brand',
        onClick: () => {},
      },
      {
        type: 'stateful',
        title: 'Add to favourites',
        icon: HeartIcon,
        color: 'brand',
        active: {
          title: 'Remove from favourites',
          icon: HeartFilledIcon,
        },
        onClick: () => {},
      },
      {
        type: 'splitter',
      },
      {
        type: 'item',
        title: 'Not Interested in this ramble',
        icon: ThumbsDownIcon,
        onClick: () => {},
      },
      {
        type: 'item',
        title: 'Follow @user',
        icon: AddUserIcon,
        onClick: () => {},
      },
      {
        type: 'item',
        title: 'Report ramble',
        icon: ExclamationTriangleIcon,
        onClick: () => {},
      },
      {
        type: 'splitter',
      },
      {
        type: 'dangerous',
        title: 'Delete ramble',
        icon: TrashIcon,
        onClick: () => deletePost({ id: postId }),
      },
    ],
    [],
  )

  return (
    <Menu isLazy {...disclosure} offset={[-20, 8]}>
      <IconButton
        size="1"
        as={MenuButton}
        icon={
          <Center boxSize="full">
            <Icon as={DotsHorizontalIcon} boxSize="4" />
          </Center>
        }
        aria-label="Menu"
        variant="ghost"
        colorScheme="neutral"
        onClick={(e) => {
          e.stopPropagation()
          disclosure.onToggle
        }}
        isActive={disclosure.isOpen}
      />
      <MenuList
        borderRadius={'8px'}
        bg={'panel.solid'}
        zIndex={20}
        border="1px solid"
        borderColor={'neutral.3'}
      >
        {options.map((item, i) => {
          if (item.type === 'splitter') {
            return <MenuDivider key={i} w={'full'} borderColor="neutral.4a" />
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
                icon={<Icon as={item.icon} boxSize={4} color="inherit" />}
                py={2}
                pl={3}
                pr={4}
                borderRadius={8}
                onClick={item.onClick}
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
              icon={<Icon as={item.icon} boxSize={5} color="inherit" />}
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
