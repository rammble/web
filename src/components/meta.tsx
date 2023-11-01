import { FC } from 'react'
import Head from 'next/head'

export interface MetaProps {
  title?: string
  description?: string
}

export const Meta: FC<MetaProps> = ({ title, description }) => {
  const desc =
    description ??
    'Rammble is a social media platform for sharing your thoughts and ideas with the world.'

  return (
    <Head>
      <title>{title ? `Rammble | ${title}` : 'Rammble'}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}
