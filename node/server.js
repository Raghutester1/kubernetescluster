const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  // res.send('AKS deployment for NodeJS')
  res.json([
    {
      "id":"1",
      "title":"AKS deployment for NodeJS"
    },
    // {
    //   "id":"2",
    //   "title":"Azure kubernetes services"
    // },
    // {
    //   "id":"3",
    //   "title":"Documentary Review: How can we escape the rat race?"
    // }
  ])
})

app.listen(4000, () => {
  console.log('connected on port 4000')
})