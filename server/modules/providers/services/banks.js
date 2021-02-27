const database = require('../../../db/database');
const Bank = require('../../../models/bank');

const getBanksByProvider = (idProvider) => {
    const query = `SELECT id_bank, name, bank_account, bank_key FROM provider_banks WHERE id_provider = ${idProvider}`;
    return database.query(query);
}

const addBank = (idProvider,{name,bankAccount,bankKey}) => {
    const query = `INSERT INTO provider_banks (id_provider, name,bank_account,bank_key) 
        values (${idProvider},'${name}','${bankAccount}','${bankKey}')`;
    return database.query(query);
}

const updateBank = (idBank, {name, bankAccount, bankKey}) => {
    const query = `UPDATE provider_banks SET name = '${name}', bank_account = '${bankAccount}', bank_key = '${bankKey}' WHERE id_bank = ${idBank}`;
    return database.query(query);
}


const deleteBanks = (idBank) => {
    const query = `Delete from provider_banks where id_bank = ${idBank}`;
    return database.query(query);
}

module.exports = {
    getBanksByProvider,
    addBank,
    updateBank,
    deleteBanks
}

