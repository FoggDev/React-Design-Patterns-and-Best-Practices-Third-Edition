// Configuration
import common from './common.json'
import local from './local.json'
import production from './production.json'

// Interface
interface IConfig {
  baseUrl: string
  api: {
    uri: string
    credentials: string
  }
  session: {
    cookieDomain: string
    maxAge: number
    cookiePrefix: string
    path: string
    httpOnly: boolean
  }
  server: {
    port: number
  }
  security: {
    secretKey: string
    expiresIn: string
  }
}

// Extracting data from .env file
const { NODE_ENV = 'development' } = process.env

// development => local
let environment = 'local'

if (NODE_ENV !== 'development') {
  environment = NODE_ENV
}

// Configurations by environment
const config: IConfig = {
  ...common,
  ...(environment === 'local' ? local : production)
}

// Environments validations
export const isLocal = () => environment === 'local'
export const isProduction = () => environment === 'production'

export default config
