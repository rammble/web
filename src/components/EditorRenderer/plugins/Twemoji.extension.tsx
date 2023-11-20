import {
  emojis,
  emojiToShortcode,
  shortcodeToEmoji,
} from '@tiptap-pro/extension-emoji'
import { PluginKey } from '@tiptap/pm/state'
import {
  mergeAttributes,
  Node,
  nodeInputRule,
  ReactRenderer,
} from '@tiptap/react'
import Twemoji from 'react-twemoji'

const emojiRegex = /(:([a-zA-Z_]{3,}):)/g

export const TwemojiExtension = Node.create({
  name: 'twemoji',
  group: 'inline',
  inline: true,
  selectable: false,
  atom: true,

  addAttributes() {
    return {
      name: {
        default: null,
        parseHTML: (element) => element.getAttribute('data-name'),
        renderHTML: (attributes) => {
          if (!attributes.name) {
            return {}
          }

          return {
            'data-name': attributes.name,
          }
        },
      },
      emoji: {
        default: null,
        parseHTML: (element) => element.getAttribute('data-emoji'),
        renderHTML: (attributes) => {
          if (!attributes.emoji) {
            return {}
          }

          return {
            'data-emoji': attributes.emoji,
          }
        },
      },
    }
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: emojiRegex,
        type: this.type,
        getAttributes: (match) => {
          const name = match[2]
          const emoji = shortcodeToEmoji(name, emojis)
          return {
            name,
            emoji: emoji?.emoji ?? 'unknown',
          }
        },
      }),
    ]
  },

  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ]
  },

  renderHTML({ node, HTMLAttributes }) {
    return new ReactRenderer(
      () => {
        const name = node.attrs.name
        const emoji = node.attrs.emoji

        if (emoji !== 'unknown') {
          return (
            <Twemoji tag="span" options={{ className: 'emoji emoji__post' }}>
              {emoji}
            </Twemoji>
          )
        }

        return <span>:{name}:</span>
      },
      {
        editor: this.editor!,
        as: 'span',
        className: 'emoji__wrapper',
        attrs: mergeAttributes({ 'data-type': this.name }, HTMLAttributes),
      },
    ).element
  },

  renderText({ node }) {
    return node.attrs.emoji
  },
})
