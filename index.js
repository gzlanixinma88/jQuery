require('./tools/db')

const express = require('express')

const app = express()

app.use(express.static('public'))

const shopMedel = require('./models/Shop')
//const serviceMedel = require('./models/Services')

app.get('/getShopList',function (req, res) {
  shopMedel.find({},function (err,list) {
    if (!err){
      res.send({list:list})
      console.log('服务器连接成功~~~')
    }
  })
})

app.listen(3000)