
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

const updateBank =(idBank,name,bankAccount,bankKey) => {
    const query = `UPDATE provider_banks SET name = '${name}' bank_account = '${bankAccount} bank_key = '${bankKey}' WHERE id_bank = ${idBank}`;
    return database.query(query);
}


const deleteBanks = (idBank) => {
        const query = `Delete from provider_banks where id_bank = ${idBank}`;
    return database.query(query);
}

