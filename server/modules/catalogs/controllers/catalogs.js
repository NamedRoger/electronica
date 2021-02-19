
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

const addCatalog = (req, res) => {

}


module.exports = {
    getCatalgos,
    getCatalogByCode
}