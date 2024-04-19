'use client'

import { ToastProps, useToast } from '@chakra-ui/react'
import {
  CheckCircledIcon,
  CrossCircledIcon,
  InfoCircledIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'
import { ReactNode } from 'react'

type NotificationStatus = 'success' | 'error' | 'warn' | 'info' | 'question'

interface UseNotificationReturnProps {
  title?: string
  description?: string
  colorScheme?: ToastProps['colorScheme']
  status: NotificationStatus
}

export const useNotification = () => {
  const toast = useToast()

  const iconMap = {
    info: <InfoCircledIcon />,
    error: <CrossCircledIcon />,
    warn: <CrossCircledIcon />,
    success: <CheckCircledIcon />,
    question: <QuestionMarkCircledIcon />,
  } satisfies Record<UseNotificationReturnProps['status'], ReactNode>

  return ({
    status,
    colorScheme,
    title,
    description,
  }: UseNotificationReturnProps) => {
    toast({
      title,
      description,
      icon: iconMap[status],
      colorScheme,
      isClosable: false,
      position: 'top-right',
      duration: 5000,
    })
  }
}
