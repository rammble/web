import { FC, ReactNode } from 'react'
import { IconButton } from '@chakra-ui/button'
import { Link } from '@chakra-ui/next-js'
import { useRouter } from 'next/router'
import { SPAPage, usePage } from 'src/store/page.store'
import { NotifBadge } from 'src/components/NotifBadge'
import { Box } from '@chakra-ui/layout'
import { MotionBox, transitions } from 'src/components/motion'

export interface FooterButtonProps {
  page: SPAPage
  label: string
  icon: ReactNode
  notifications?: number
}

export const FooterButton: FC<FooterButtonProps> = ({
  page,
  label,
  icon,
  notifications,
}) => {
  const { current, set: setPage } = usePage()
  const isActive = current === page

  return (
    <Box w="full" pos="relative">
      <Box w="full" pos="relative" rounded="8px" overflow="hidden">
        <MotionBox
          pos="absolute"
          boxSize="100%"
          top={0}
          left={0}
          right={0}
          bottom={0}
          rounded="8px"
          bg="linear-gradient(135deg, #15151F 0.62%, #232335 100%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: Number(isActive) }}
          transition={transitions.slow}
        />
        <MotionBox
          pos="absolute"
          boxSize="100%"
          top={0}
          left={0}
          right={0}
          bottom={0}
          rounded="8px"
          bg="linear-gradient(125deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.00) 99.69%)"
          initial={{ opacity: 1 }}
          animate={{ opacity: Number(!isActive) }}
          transition={transitions.slow}
        />
        <IconButton
          onClick={() => setPage(page)}
          p={4}
          w="full"
          rounded="8px"
          aria-label={label}
          color={isActive ? 'brand' : 'ui.40'}
        >
          {icon}
        </IconButton>
      </Box>
      {notifications && <NotifBadge value={notifications} />}
    </Box>
  )
}
