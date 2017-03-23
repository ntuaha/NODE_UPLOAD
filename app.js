
const express = require('express')
const uploader = require('./module/upload')

const app = express()


app.get('/',(req, res) => {
  res.send('Hello World!')
})

app.use('/upload',uploader)
app.use('/',express.static(__dirname + '/public'))

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!')
})
