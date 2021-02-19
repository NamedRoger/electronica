
const catalogsService = require('../services/catalogs');

const getCatalgos = async (req,res) => {
    const catalogs = await catalogsService.getCatalogs();
    res.json(catalogs);
}

const getCatalogByCode = async (req,res) => {
    const codeCatalog = req.params.code;
    try{
       const catalog = (await catalogsService.getCatalogByCode(codeCatalog))[0] || null;
       if(catalog === null) throw "No se encotró el catalogo";
       res.json(catalog);
    }catch(e){
        res.status(400).json({
            error : e
        });
    }
}

const addCatalog = async (req, res) => {
    const newCatalog = req.body;
    await catalogsService.addCatalog(newCatalog.name);
    res.status(201).json({success:true});
}

const updateCatalog = async (req, res) => {
    const idCatalog = req.params.idCatalog;
    const newDataCatalog = req.body;
    await catalogsService.updateCatalog(idCatalog,newDataCatalog.name);
    res.status(204);
    res.send();
} 

const desactiveCatalog = async (req, res) => {
    const idCatalog = req.params.idCatalog;
    await catalogsService.desactiveCatalog(idCatalog);
    res.status(204);
    res.send();
}

module.exports = {
    getCatalgos,
    getCatalogByCode
}