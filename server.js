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

const getRandomProd = async () =>{
    const allProductsArr =  await prodContainer.read(file);
    console.log(allProductsArr);
    const getRandomInt = (max) =>{
        return Math.floor(Math.random()* max)
    }
    const randomId = getRandomInt(allProductsArr.length)
    ;
    return allProductsArr[randomId]
}




app.get('/productos', async (req, res) =>{
    let products = await getAllProds();
    res.json(products)
})

app.get('/productoRandom', async (req, res) =>{
    let randomProd = await getRandomProd();
    res.json(randomProd)
})


const PORT = 8000
const sv = httpServer.listen(PORT, () =>{
    console.log(`PORT ${PORT} ONLINE`)
})
