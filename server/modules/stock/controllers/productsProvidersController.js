const productproviderService = require('../services/productProvider');

const getProviders = async (req,res) => {
    const idProduct = req.params.idProduct;
    const providers = await productproviderService.getProviders(idProduct);
    res.json(providers); 
}

const addProvider = async (req,res) =>{
    const idProduct = req.params.idProduct;
    const newProvider = req.body;
    try {
        await productproviderService.addProvider(newProvider)
        res.status(201).json({success:true});
    } catch (e) {
        res.status(400).json({
            ...e,
            success: false
        });
    }
}

const updateProvider = async (req,res) => {
    const idProductProvider = req.params.idProductProvider;
    const newDataProvider = req.body;
    try {
        await productproviderService.updateProvider(idProductProvider,newDataProvider);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 400).json({
            ...e,
            success:false
        });
    }
}

const deleteProvider = async (req,res) => {
    const idProductProvider = req.params.idProductProvider;
    try{
        await productproviderService.deleteProvider(idProductProvider);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }
}

module.exports = {
    getProviders,
    addProvider,
    updateProvider,
    deleteProvider
}
