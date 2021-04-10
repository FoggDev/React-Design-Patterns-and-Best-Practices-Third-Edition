// Dependencies
import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import session from 'express-session'

// Middleware
import { isConnected } from './lib/middlewares/user'

// Config
import config from './config'

// Express app
const app = express();
const port = process.env.NODE_PORT || 3000
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

// Making the dist directory static
app.use(express.static(DIST_DIR));

// Middlewares
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: config.security.secretKey
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.security.secretKey))
app.use(cors({ credentials: true, origin: true }))

app.get('/dashboard',
  isConnected(
    true,
    ['god', 'admin', 'editor'],
    `/login?redirectTo=/dashboard`
  ),
  (req: Request, res: Response, next: NextFunction) => {
    next()
  }
)

app.get(`/logout`, (req: Request, res: Response) => {
  res.clearCookie('at')
  res.redirect('/')
})

// Routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(HTML_FILE)
})

// Listening
app.listen(port, () => console.log(`Running at http://localhost:${port}`))
