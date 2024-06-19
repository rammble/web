'use client'

import { BoxProps } from '@chakra-ui/layout'
import { ChakraComponent, PropsOf } from '@chakra-ui/react'
import { chakra, forwardRef } from '@chakra-ui/system'
import { EditorContent, EditorContentProps, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import Twemoji from 'react-twemoji'
import { TwemojiExtension } from 'src/components/client/EditorRenderer/plugins/Twemoji.extension'

const EditorContentChakra = chakra(EditorContent, {
  baseStyle: {
    textStyle: '3',
    fontWeight: 'regular',
    color: 'neutral.11a',
  },
})

type EditorContentChakraComponent = ChakraComponent<
  'div',
  BoxProps &
    Omit<EditorContentProps, 'editor' | 'readOnly'> &
    EditorRendererProps
>

export interface EditorRendererProps {
  content: string
  editable?: boolean
  onUpdate?: (content: string) => void
}

export const EditorRenderer = forwardRef<
  PropsOf<EditorContentChakraComponent>,
  typeof EditorContentChakra
>(({ content, editable = false, onUpdate = () => {}, ...props }, ref) => {
  const editor = useEditor({
    content,
    extensions: [StarterKit, TwemojiExtension],
    editable,
    onUpdate({ editor }) {
      onUpdate(editor.getText())
    },
  })

  return (
    <EditorContentChakra
      ref={ref}
      {...props}
      editor={editor}
      readOnly={!editable}
    />
  )
}) as EditorContentChakraComponent
