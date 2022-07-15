const fs = require('fs')

module.exports = class Container {
    constructor (){
    }

    read = async (file) =>{
        let productsArray= []
        try{
            productsArray = JSON.parse( await fs.promises.readFile(file, 'utf-8'));
        }catch(err){
            console.log(err)
        }
        return productsArray
    }

    write = async (file, input) =>{
        try{
            await fs.promises.writeFile(file, JSON.stringify(input, null, 2))
        }catch(err){
        console.log(err)
        }
    }

   
}
