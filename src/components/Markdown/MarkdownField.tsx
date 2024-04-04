import React, { FC } from 'react'
import Markdown, { Components } from 'react-markdown'
import HeadingRenderer from 'src/components/Markdown/HeaderRenderer'
import { ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export interface MarkdownFieldProps {
  text: string
}

const components: Components = {
  h1: HeadingRenderer,
  h2: HeadingRenderer,
  ul: ({ node, ...rest }) => {
    return <UnorderedList {...rest} />
  },
  ol: ({ node, ...rest }) => {
    return <OrderedList spacing={1} {...rest} />
  },
  li: ({ node, ...rest }) => {
    return <ListItem {...rest} />
  },
  a({ node, ...rest }) {
    // @ts-ignore
    return <Link textStyle={'3'} color={'accent.8'} {...rest} />
  },
}

export const MarkdownField: FC<MarkdownFieldProps> = ({ text }) => {
  return <Markdown components={components}>{text}</Markdown>
}
