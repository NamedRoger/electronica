const OptionsService = require('../services/catalago_options');

const getOptions = async (req,res)=> {
    const idCatalog = req.params.idCatalog;
    const options = await OptionsService.getOptions(idCatalog);
    res.json(options);
}

const addOption = async (req, res) => {
    const newOption = req.body;
    await OptionsService.addOption(newOption.idCatalog, newOption.name);
}

module.exports = {
    getOptions,
}
