'use client'

import React from 'react'

function flatten(text: string, child: any): string {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

export default function HeadingRenderer(props: any) {
  const children = React.Children.toArray(props.children)
  const text = children.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement(props.node.tagName, { id: slug }, props.children)
}
