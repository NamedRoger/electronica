
const path = require('path');
const pathEnv = path.join(process.cwd()+'\\..','..','.env');
require('dotenv').config({
    path:pathEnv
});
const db = require('../../db/database');
const Bank = require('../../models/bank');
const database = new db();

const getBanksByProvider = (idProvider) => {
    const query = `SELECT id_bank, name, bank_account, bank_key FROM provider_banks WHERE id_provider = ${idProvider}`;
    return database.query(query);
}

const addBank = (bank) => {
    if(bank instanceof Bank){
        const query = `INSERT INTO provider_banks (id_provider, name,bank_account,bank_key) 
        values (${bank.idProvider},'${bank.name}','${bank.bankAccount}',${bank.bankKey})`;
        return database.query(query);
    }else{
        throw "El parametro no es del tipo Bank";
    }
}

const updateBank =(name,bankAccount,bankKey) => {
    const query = `UPDATE provider_banks SET name = '${bank.name}' bank_account = '${bankAccount} bank_key '${bankKey}' WHERE provider_banks = ${idProvider}`;
    return database.query(query);
}


const deleteBanks = (bank,idProvider,name) => {
        const query = `Delete from banks where provider_banks = ${idProvider}`;
    return database.query(query);
}

