const express = require('express')
const fs = require('fs')

let app = express()

app.all('*', function(req, res, next) {
  console.log('Request: ' + req.method + ' ' + req.originalUrl);
  console.log(req.headers)
  next();
})

app.all('/health', function(req, res) {
  res.json({
    "status": "healthy"
  })
})

require('./routes/account')(app)

let port = process.env.PORT || 3000

app.listen(port, () => console.log('Mock listening on port ' + port))
