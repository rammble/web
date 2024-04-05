import { FC } from 'react'
import { Icon } from '@chakra-ui/react'
import { ShieldTickIcon } from 'src/icons/ShieldTickIcon'
import {
  AccessibilityIcon,
  HeartFilledIcon,
  LockClosedIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

export interface SettingsIconDisplayerProps {
  iconName: string
  isActive: boolean
}

const SettingIcons = {
  UserIcon: PersonIcon,
  LockIcon: LockClosedIcon,
  FilledHeartIcon: HeartFilledIcon,
  ShieldTickIcon: ShieldTickIcon,
  AccessibilityIcon: AccessibilityIcon,
}

export const SettingsIconDisplayer: FC<SettingsIconDisplayerProps> = ({
  iconName,
  isActive,
}) => {
  return (
    <Icon
      color={isActive ? 'ui.90' : 'ui.60'}
      boxSize={8}
      as={SettingIcons[iconName as keyof typeof SettingIcons]}
    />
  )
}
