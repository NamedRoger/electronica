
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

const updateBank =(id_bank, name) => {
    const query = `UPDATE banks SET name = '${name}' code = '${generateCode(banksPrefix,name)} WHERE id_banks = ${id_bank}`;
    return database.query(query);
}


const deleteBanks = (id_bank,name) => {
        const query = `Delete from banks where id_banks = ${id_bank}`;
    return database.query(query);
}

