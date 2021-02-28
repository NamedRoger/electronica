const customersControllers = require('../controllers/customersControllers');
const {NotFoundException} = require('../../../helpers/http/exceptions/index');

const getCliente= async (req, res) => {
    const idCliente = req.params.idProvider;
    try{
        const Cliente = (await customersControllers.getCliente(idCliente))[0] || null;
        if(Cliente === null)throw new NotFoundException();

        res.json(Cliente);
    }catch(e){
        res.status(e.status || 400).json({
            ...e, 
            success:false
        });
    }
}

const getClientes = async (req, res) => {
        const Cliente = await customersControllers.getClientes();
    res.json(Cliente);
    
}

const addCliente = async (req, res) => {
    try{
        const newCliente = req.body;
        await customersControllers.addCliente(newCliente);
        res.status(204).send();
    }catch(e){
        res.status(e.status||400).json({
            ...e, 
            success:false
        });
    }
}

const updateCliente = async (req, res) => {
    const idCliente = req.params.idCliente;
    const newDataCliente = req.body;
    try{
        const Cliente = (await customersControllers.getCliente(idCliente))[0] || null;
        if(Cliente === null )throw new NotFoundException();

        await customersControllers.updateCliente(idCliente,newDataCliente);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 400).json({
            ...e,
            success: false
        })
    }
}

const desactiveCliente = async (req, res) => {
    try{
        const idCliente = req.params.idCliente;
        await customersControllers.desactiveCliente(idCliente);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 400).json({
            ...e,
            succes:false
        });
    }
}

module.exports = {
    getCliente,
    getClientes, 
    addCliente, 
    updateCliente, 
    desactiveCliente
}

