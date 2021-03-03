const productService = require('../services/productService');
const fs = require('fs');
const path = require('path');

const getProduct = async (req,res) => {
    const idProduct = req.params.idProduct;
    const product = await productService.getProduct(idProduct);
    res.json(product); 
}

const getProducts = async (req,res) => {
    const product = await productService.getProducts();
    res.json(product); 
}

const addProduct = async (req,res) => {
    const newProduct = req.body;
    try {
        
        const {webPath,foto} = newProduct;
        if(webPath.trim() !== "") copyFile(webPath,foto);

        await productService.addProduct(newProduct);
        res.status(201).json({success:true});
    } catch (e) {
        res.status(400).json({
            ...e,
            success: false
        });  
    }
}

const updateProduct = async (req,res) => {
    const idProduct = req.params.idProduct;
    const newDataProduct = req.body;
    try{
        const {webPath,foto} = newDataProduct;
        
        if(webPath.trim() !== "") copyFile(webPath,foto);

        await productService.updateProduct(idProduct,newDataProduct);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).send(e);
    }

}

const desactiveProduct = async (req,res) => {
    const idProduct = req.params.idProduct;
    try{
        await productService.desactiveProduct(idProduct);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }
}

const copyFile = (webPath,file) => {
    fs.readFile(webPath, function (err, data) {
        if (err) throw err;
        fs.writeFile(path.join("D:\\rogev\\Documents\\desarrollo\\javascript\\electron\\electronica\\front\\public\\img",file), data, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    });
}

module.exports ={
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    desactiveProduct
}
