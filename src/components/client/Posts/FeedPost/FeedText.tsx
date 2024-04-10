'use client'
import { FC } from 'react'
import { EditorRenderer } from 'src/components/client/EditorRenderer'

export interface FeedTextProps {
  text: string
}

export const FeedText: FC<FeedTextProps> = ({ text }) => (
  <EditorRenderer content={text} />
)
