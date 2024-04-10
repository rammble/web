import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const cookies = new Cookies(req, res)

  console.log(cookies.get('jwt'))

  res.status(200).json({
    jwt: cookies.get('jwt'),
    secure: cookies.secure,
  })
}
