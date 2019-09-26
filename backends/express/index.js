var express = require('express')
var routes = require('routes')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
app.use('/api/v1', routes)

app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(8080)
