'use client'

import type { ButtonProps } from '@chakra-ui/button'
import { Button } from '@chakra-ui/button'
import type { ImageProps } from '@chakra-ui/image'
import { Image } from '@chakra-ui/image'
import type {
  BoxProps,
  CenterProps,
  FlexProps,
  StackProps,
  TextProps,
} from '@chakra-ui/layout'
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/layout'
import { Avatar, AvatarProps } from '@chakra-ui/react'
import { forwardRef } from '@chakra-ui/system'
import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

export const DEFAULT_DURATION = 0.85
export const DEFAULT_EASING = [0.04, 0.91, 0.6, 0.99]

export const transitionConfig = {
  ease: DEFAULT_EASING,
  duration: DEFAULT_DURATION,
} satisfies MotionProps['transition']

export const transitions = {
  default: transitionConfig,
  slow: {
    ...transitionConfig,
    duration: 0.6,
  } satisfies MotionProps['transition'],
  medium: {
    ...transitionConfig,
    duration: 0.4,
  } satisfies MotionProps['transition'],
  fast: {
    ...transitionConfig,
    duration: 0.2,
  } satisfies MotionProps['transition'],
}

export type MotionBoxProps = Omit<BoxProps, keyof MotionProps> & MotionProps
export type MotionTextProps = Omit<TextProps, keyof MotionProps> & MotionProps
export type MotionCenterProps = Omit<CenterProps, keyof MotionProps> &
  MotionProps
export type MotionImageProps = Omit<ImageProps, keyof MotionProps> & MotionProps

// This sucks
export const MotionBox = motion<MotionBoxProps>(Box as any)
export const MotionCenter = motion<MotionCenterProps>(Center as any)
export const MotionText = motion<MotionTextProps>(Text as any)
export const MotionFlex = motion<
  Omit<FlexProps, keyof MotionProps> & MotionProps
>(Flex as any)
export const MotionStack = motion<
  Omit<StackProps, keyof MotionProps> & MotionProps
>(Stack as any)
export const MotionButton = motion<
  Omit<ButtonProps, keyof MotionProps> & MotionProps
>(Button as any)
export const MotionImage = motion<MotionImageProps>(Image as any)
export const MotionAvatar = motion<
  Omit<AvatarProps, keyof MotionProps> & MotionProps
>(Avatar as any)

export const MotionSpinner = forwardRef<
  Omit<MotionBoxProps, 'transition' | 'initial' | 'animate'> & {
    speed?: number
  },
  typeof MotionBox
>(({ speed = 0.8, ...props }, ref) => (
  <MotionBox
    ref={ref}
    {...props}
    display="flex"
    transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
  />
))
