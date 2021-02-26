const { NotFoundException } = require('../../../helpers/http/exceptions');

const serviceBanks = require('../services/banks');
const {NotFoundException} = require ('../../../helpers/http/exceptions/index');

const getBanks = async (req,res) => {
    const idProvider = req.params.idProvider;
    const banks = await serviceBanks.getBanksByProvider(idProvider);
    res.json(banks); 
}

const addBank = async (req,res) => {
    const idProvider = req.params.idProvider;
    const newDataBank = req.body;
    try {
        await serviceBanks.addBank(idProvider,{name:newDataBank.name,bankAccount:newDataBank.bankAccount,bankKey:newDataBank.bankKey});
        res.status(201).json({success:true});
    } catch (e) {
        res.status(400).json({
            ...e,
            success: false
        });  
    }
}

const updateBank = async (req,res) => {
    const idBank = req.params.idBank;
    const newDataBank = req.body;
    try{
        const bank = (await bank.getBank(idBank))[0] || null;
        if(bank === null) throw new NotFoundException();

        await serviceBanks.updateBank(idBank,{name:newDataBank.name,bankKey:newDataBank.bankKey,bankAccount:newDataBank.bankKeyAccount})
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }

}

const deleteBank = async (req,res) => {
    const idBank = req.params.idBank;
    try{
        let bank = (await bank.getBank(idBank))[0] || null;
        if(bank === null) throw new NotFoundException();

        await serviceBanks.deleteBanks(idBank);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }
}

module.exports = {
    getBank,
    addBank,
    updateBank,
    deleteBank
}
