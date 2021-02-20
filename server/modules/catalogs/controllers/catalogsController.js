
const catalogsService = require('../services/catalogsService');
const {NotFoundException} = require('../../../helpers/http/exceptions/index');

const getCatalgos = async (req,res) => {
    const catalogs = await catalogsService.getCatalogs();
    res.json(catalogs);
}

const getCatalogByCode = async (req,res) => {
    const codeCatalog = req.params.code;
    try{
       const catalog = (await catalogsService.getCatalogByCode(codeCatalog))[0] || null;
       if(catalog === null) throw new NotFoundException();
       res.json(catalog);
    }catch(e){
        res.status(400).json({
            error : e
        });
    }
}

const addCatalog = async (req, res) => {
    const newCatalog = req.body;
    try{
        await catalogsService.addCatalog(newCatalog.name);
        res.status(201).json({success:true});
    }catch(e){
        res.status(400).json({
            ...e,
            success: false
        });
    }
    
}

const updateCatalog = async (req, res) => {
    const idCatalog = req.params.idCatalog;
    const newDataCatalog = req.body;
    try{
        const catalog = (await catalogsService.getCatalogById(idCatalog))[0] || null;
        if(catalog === null) throw new NotFoundException();

        await catalogsService.updateCatalog(idCatalog,newDataCatalog.name);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }
} 

const desactiveCatalog = async (req, res) => {
    const idCatalog = req.params.idCatalog;
    try{
        let catalog = (await catalogsService.getCatalogById(idCatalog))[0] || null;
        if(catalog === null) throw new NotFoundException();

        await catalogsService.desactiveCatalog(idCatalog);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }
}

module.exports = {
    getCatalgos,
    getCatalogByCode,
    addCatalog,
    updateCatalog,
    desactiveCatalog
}