const OptionsService = require('../services/catalago_options');

const getOptions = async (req,res)=> {
    const idCatalog = req.params.idCatalog;
    const options = await OptionsService.getOptions(idCatalog);
    res.json(options);
}


module.exports = {
    getOptions,
}
