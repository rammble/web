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
  new Promise((resolve, reject) => {
    const cookie = new Cookies(req, res)
    const authToken = cookie.get('jwt')

    req.url = req.url?.replace('/api/graphql', '/')

    req.headers.cookie = ''

    if (authToken) {
      req.headers['Authorization'] = authToken
    }

    proxy.once('error', reject).web(req, res, {
      autoRewrite: false,
      target: new URL(`${PROTOCOL}://api.${HOST}`),
    })

    resolve(0)
  })

const graphql: NextApiHandler = async (req, res) => {
  await proxy_request(req, res)
}

export default graphql
