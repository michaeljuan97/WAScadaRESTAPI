const https = require('https')

const options = {
  hostname: '127.0.0.1',
  path: '/WaWebService/JSON/Login',
  method: 'GET',
  rejectUnhauthorized: false,
    headers: {'Content-Type': 'application/json',
              'CharSet': 'UTF-8',
            'LoginType': 'view',
        'Authorization': 'Basic ' + new Buffer.alloc(5, 'admin:compnet').toString('base64')}
}



const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()