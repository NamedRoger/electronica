const providersService = require('../services/providerService');
const {NotFoundException} = require('../../../helpers/http/exceptions/index');

const getProvider = async (req, res) => {
    const idProvider = req.params.idProvider;
    try{
        const provider = (await providersService.getProvider(idProvider))[0] || null;
        if(provider === null)throw new NotFoundException();

        res.json(provider);
    }catch(e){
        res.status(e.status || 400).json({
            ...e, 
            success:false
        });
    }
}

const getProviders = async (req, res) => {
        const providers = await providersService.getProviders();
    res.json(providers);
    
}

const addProvider = async (req, res) => {
    try{
        const newProvider = req.body;
        await providersService.addProvider(newProvider);
        res.status(204).send();
    }catch(e){
        res.status(e.status||400).json({
            ...e, 
            success:false
        });
    }
}

const updateProvider = async (req, res) => {
    const idProvider = req.params.idProvider;
    const newDataProvider = req.body;
    try{
        const provider = (await providersService.getProvider(idProvider))[0] || null;
        if(provider === null )throw new NotFoundException();

        await providersService.updateProvider(idProvider,newDataProvider);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 400).json({
            ...e,
            success: false
        })
    }
}

const desactiveProvider = async (req, res) => {
    try{
        const idProvider = req.params.idProvider;
        await providersService.desactiveProvider(idProvider);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 400).json({
            ...e,
            succes:false
        });
    }
}

module.exports = {
    getProvider,
    getProviders, 
    addProvider, 
    updateProvider, 
    desactiveProvider
}

