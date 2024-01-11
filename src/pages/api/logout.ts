import { NextApiHandler } from 'next'
import Cookies from 'cookies'

const logout: NextApiHandler = async (req, res) => {
  const cookies = new Cookies(req, res)

  cookies.set('jwt', '', {
    httpOnly: true,
    overwrite: true,
    path: '/api',
  })

  res.redirect((req.query.ref as string) ?? req.headers.referer ?? '/')
}

export default logout
