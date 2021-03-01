const customersService = require('../services/customers');
const {NotFoundException} = require('../../../helpers/http/exceptions/index');

const getCliente= async (req, res) => {
    const idCliente = req.params.idCliente;
    try{
        const cliente = (await customersService.getCliente(idCliente))[0] || null;
        if(cliente === null)throw new NotFoundException();

        res.json(cliente);
    }catch(e){
        res.status(e.status || 400).json({
            ...e, 
            success:false
        });
    }
}

const getClientes = async (req, res) => {
    const clientes = await customersService.getClientes();
    res.json(clientes);
    
}

const addCliente = async (req, res) => {
    try{
        const newCliente = req.body;
        await customersService.addCliente(newCliente);
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
        const cliente = (await customersService.getCliente(idCliente))[0] || null;
        if(cliente === null )throw new NotFoundException();

        await customersService.updateCliente(idCliente,newDataCliente);
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
        await customersService.desactiveCustomer(idCliente);
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

