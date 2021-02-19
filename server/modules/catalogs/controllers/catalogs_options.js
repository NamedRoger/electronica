const OptionsService = require('../services/catalago_options');

const getOptions = async (req,res)=> {
    const options = await OptionsService.getOptions(idCatalog);
    res.json(options);
}

const getOptionsById = async (req,res) => {
    const idCatalog = req.params.idCatalog;
    try{
       const OptionsService = (await OptionsService.getOptionsById(idCatalog))[0] || null;
       if(OptionsService === null) throw "No se encotró el catalogo";
       res.json(OptionsService);
    }catch(e){
        res.status(400).json({
            error : e
        });
    }
}


module.exports = {
    getOptions,
    addOptions,
    updateOptions,
    desactiveOptions
}
