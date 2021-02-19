const OptionsService = require('../services/catalagoOptionsService');
const { NotFoundException } = require('../../../helpers/http/exceptions/index');

const getOptions = async (req,res)=> {
    const idCatalog = req.params.idCatalog;
    const options = await OptionsService.getOptions(idCatalog);
    res.json(options);
}

const addOption = async (req, res) => {
    const newOption = req.body;
    await OptionsService.addOption(newOption.idCatalog, newOption.name);
    res.status(200).send();
}

const updateOption = async (req, res) => {
    const idOption = req.params.idOption;
    const newDataOption = req.body;
    try{
        await OptionsService.updateOption(idOption,newDataOption.name);
    }catch(e){
        res.status(e.status || 404).send();
    }
}

const desactiveOption = async (req, res) =>{
    const idOption = req.params.idOption;
    try{
        await OptionsService.desactiveOption(idOption);
    }catch(e){
        res.status(e.status || 404).send();
    }
}

module.exports = {
    getOptions,
    addOption,
    updateOption,
    desactiveOption
}

