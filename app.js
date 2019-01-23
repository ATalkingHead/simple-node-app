const express = require('express')
const moment = require('moment')
const app = express()
const port = 8080

var node   = process.env.NODE_NAME;
var podName   = process.env.POD_NAME;
var podNamespace   = process.env.POD_NAMESPACE;
var podIP   = process.env.POD_IP;
var responseString

app.get('/', (req, res) => {
  console.log(`Request received at ${moment().toISOString().substr(11,8)}`)

  responseString = `Response: ${moment().toISOString().substr(11,8)}
        Node: ${node}
        Pod Name: ${podName}
        Pod Namespace: ${podNamespace}
        Pod IP: ${podIP}
`

  res.send(responseString)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
