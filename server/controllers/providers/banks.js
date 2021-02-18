
const path = require('path');
const pathEnv = path.join(process.cwd()+'\\..','..','.env');
require('dotenv').config({
    path:pathEnv
});
const db = require('../../db/database');
const {generateCode} = require('../../helpers');
const database = new db();

const banksPrefix = 'CAT';

const getBankByCode = (CodeBank) => {
    const query = `SELECT id_banks FROM banks WHERE active = 1 AND code = ${CodeBank}`;
    return database.query(query);
}

const addBank = (id_bank,name) => {
    const query = `INSERT INTO banks (id_banks, name, active, code) values ('${id_bank}','${name}',${true},'${generateCode(banksPrefix,name)}')`;
    return database.query(query);
}

const updateBank =(id_bank, name) => {
    const query = `UPDATE banks SET name = '${name}' code = '${generateCode(banksPrefix,name)} WHERE id_banks = ${id_bank}`;
    return database.query(query);
}


const deleteBanks = (id_bank,name) => {
        const query = `Delete from banks where id_banks = ${id_bank}`;
    return database.query(query);
}

