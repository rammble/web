import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const cookies = new Cookies(req, res)

  cookies.set('jwt', '', {
    httpOnly: true,
    overwrite: true,
    path: '/api',
  })

  res.redirect((req.query.ref as string) ?? req.headers.referer ?? '/')
}
