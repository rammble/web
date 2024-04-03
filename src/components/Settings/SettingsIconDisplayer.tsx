import { FC } from 'react'
import { Icon } from '@chakra-ui/react'
import { UserIcon } from 'src/icons/UserIcon'
import { LockIcon } from 'src/icons/LockIcon'
import { FilledHeartIcon } from 'src/icons/FilledHeartIcon'
import { ShieldTickIcon } from 'src/icons/ShieldTickIcon'
import { AccessibilityIcon } from 'src/icons/AccessibilityIcon'

export interface SettingsIconDisplayerProps {
  iconName: string
  isActive: boolean
}

const SettingIcons = {
  UserIcon: UserIcon,
  LockIcon: LockIcon,
  FilledHeartIcon: FilledHeartIcon,
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
