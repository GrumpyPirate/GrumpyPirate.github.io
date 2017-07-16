const express = require('express')

const appDir = 'dist'
const publicDir = 'public'

const port = 8000

// App setup
const app = express()
app.use(express.static(`${__dirname}/${publicDir}`))
app.use(express.static(`${__dirname}/${appDir}`))

// Catch-all
app.route('*')
  .get((req, res) => {
    res.sendFile('index.html', {
      root: `${__dirname}/${appDir}`,
      headers: {
        'Content-Type': 'text/html'
      } // /headers
    })
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
