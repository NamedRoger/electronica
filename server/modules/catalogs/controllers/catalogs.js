
const catalogsService = require('../services/catalogs');

const getCatalgos = async (req,res) => {
    console.log(await catalogsService.getCatalogs());
}


module.exports = {
    getCatalgos
}