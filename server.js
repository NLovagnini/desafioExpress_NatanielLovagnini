const express = require('express')
const http = require('http')
const app = express()
const Container = require('./class.js')
const prodContainer = new Container()
const file = './products.json'


const httpServer = http.createServer(app)

const getAllProds = async () =>{
    console.log('ok');
    const allProductsArr = await prodContainer.read(file);
    return allProductsArr;
}

let products = getAllProds();

app.get('/', (req, res) =>{
    console.log(products)
})

app.get('/productos', (req, res) =>{
    res.json(products)
})


const PORT = 8000
const sv = httpServer.listen(PORT, () =>{
    console.log(`PORT ${PORT} ONLINE`)
})
