const Container = require('./class.js')
const prodContainer = new Container()
const {Router} = require('express')
const file = './products.json'
const router = Router()

//Get all
const getAllProds = async () =>{
    const allProductsArr = await prodContainer.read(file);
    return allProductsArr;
}

//Get product by id
const getProdById = (id) =>{
    const allProductsArr = prodContainer.read(file);
    const newProductsArr = allProductsArr.filter((prod) => prod.id == id);
    return newProductsArr
}
 
const getRandomProd = async () =>{
    const allProductsArr = await prodContainer.read(file);
    const getRandomInt = (max) =>{
        return Math.floor(Math.random()* max)
    }
    const randomId = getRandomInt(allProductsArr.length)
    return allProductsArr[randomId]
}
