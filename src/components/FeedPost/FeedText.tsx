import { FC } from 'react'
import { EditorRenderer } from 'src/components/EditorRenderer'

export interface FeedTextProps {
  text: string
}

export const FeedText: FC<FeedTextProps> = ({ text }) => {
  return <EditorRenderer content={text} />
}
