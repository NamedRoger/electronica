const productService = require('../services/productService');

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
        await productService.addProduct(newProduct)
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
        await productService.updateProduct(idProduct,newDataProduct);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
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

module.exports ={
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    desactiveProduct
}
