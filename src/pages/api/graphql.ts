import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import { HOST, PROTOCOL } from 'src/utils/constants'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy_request = (req: NextApiRequest, res: NextApiResponse) =>
  new Promise<void>((resolve, reject) => {
    const cookie = new Cookies(req, res)
    const authToken = cookie.get('jwt')

    req.headers.cookie = ''

    req.url = req.url?.replace('/api/graphql', '/') ?? req.url

    if (authToken) {
      req.headers['Authorization'] = authToken
    }

    proxy.once('error', reject).web(req, res, {
      autoRewrite: false,
      target: new URL(`${PROTOCOL}://api.${HOST}`),
    })

    proxy.once('end', () => resolve())
  })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return await proxy_request(req, res)
}
