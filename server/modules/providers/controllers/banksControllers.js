const { NotFoundException } = require('../../../helpers/http/exceptions');

const observation = require('../services/banks');
const {NotFoundException} = require ('../../../helpers/http/exceptions/index');

const getBanks = async (req,res) => {
    const banks = await banks.getBank();
    res.json(banks); 
}

const addBank = async (req,res) => {
    const newDataBank = req.body;
    try {
        await note.addBank(idBank,newDataBank.name.bankAccount.bankKey);
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

        await bank.updateBank(idBank,newDataBank.name.bankAccount.bankKey);
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

        await bank.deleteBank(idBank);
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
