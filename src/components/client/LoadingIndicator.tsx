'use client'

import { FC } from 'react'
import { chakra } from '@chakra-ui/system'

const Circle = chakra.circle

export const LoadingIndicator: FC = () => (
  <svg
    width="80"
    viewBox="0 0 30 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle
      cx="8"
      cy="8"
      r="2"
      fill="brand"
      style={{
        animation:
          'loading_indicator_bounce 1.4s infinite cubic-bezier(0.04, 0.91, 0.6, 0.99)',
      }}
    />
    <Circle
      cx="15"
      cy="8"
      r="2"
      fill="brand"
      style={{
        animation:
          'loading_indicator_bounce 1.4s infinite 0.2s cubic-bezier(0.04, 0.91, 0.6, 0.99)',
      }}
    />
    <Circle
      cx="22"
      cy="8"
      r="2"
      fill="brand"
      style={{
        animation:
          'loading_indicator_bounce 1.4s infinite 0.4s cubic-bezier(0.04, 0.91, 0.6, 0.99)',
      }}
    />
  </svg>
)
