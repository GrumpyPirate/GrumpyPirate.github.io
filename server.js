const express = require('express')
const path = require('path')
const morgan = require('morgan')

const appDir = path.join(__dirname, '/build')

const port = process.env.PORT || 3000

// App setup
const app = express()

// Logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

// Static dirs
app.use(express.static(appDir))

// Catch-all
app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: appDir
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
