// Dependencies
import express, { Request, Response, NextFunction } from 'express'
import path from 'path'

// Express app
const app = express();
const port = process.env.NODE_PORT || 3000
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(HTML_FILE)
})

app.get('/api', (req: Request, res: Response) => {
  res.send('API')
})

// Listening
app.listen(port, () => console.log(`Running at http://localhost:${port}`))
