
const serviceObservation = require('../services/observations');

const getObservation = async (req,res) => {
    const idProvider = req.params.idProvider;
    const observations = await serviceObservation.getObservationByProvider(idProvider);
    res.json(observations); 
}

const addObservation = async (req,res) => {
    const idProvider = req.params.idProvider;
    const newObservation = req.body;
    try {
        await serviceObservation.addObservation(idProvider,newObservation.description);
        res.status(201).json({success:true});
    } catch (e) {
        res.status(400).json({
            ...e,
            success: false
        });  
    }
}

const updateObservation = async (req,res) => {
    const idObservation = req.params.idObservation;
    const newDataObservation = req.body;
    try{
        await serviceObservation.updateObservation(idObservation,newDataObservation.description);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }

}

const deleteObservation = async (req,res) => {
    const idObservation = req.params.idObservation;
    try{
        await serviceObservation.deleteObservation(idObservation);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }
}

module.exports = {
    getObservation,
    addObservation,
    updateObservation,
    deleteObservation
}
