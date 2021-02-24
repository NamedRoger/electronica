const { NotFoundException } = require('../../../helpers/http/exceptions');

const observation = require('../services/observations');
const {NotFoundException} = require ('../../../helpers/http/exceptions/index');

const getObservation = async (req,res) => {
    const observation = await observation.getObservation();
    res.json(observation); 
}

const addObservation = async (req,res) => {
    const newobservation = req.body;
    try {
        await observation.addObservation(newobservation.description);
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
        const observation = (await observation.getObservationId(idObservation))[0] || null;
        if(observation === null) throw new NotFoundException();

        await observation.updateObservation(idObservation,newDataObservation.description);
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
        let observation = (await observation.getObservationId(idObservation))[0] || null;
        if(observation === null) throw new NotFoundException();

        await observation.deleteObservation(idObservation);
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
