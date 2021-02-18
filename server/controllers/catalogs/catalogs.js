
const path = require('path');
const pathEnv = path.join(process.cwd()+'\\..','..','.env');
require('dotenv').config({
    path:pathEnv
});
const db = require('../../db/database');
const {generateCode} = require('../../helpers');
const database = new db();

const catalogPrefix = 'CAT';

const getCatalogByCode = (CodeCatalog) => {
    const query = `SELECT id_catalog FROM catalogs WHERE active = 1 AND code = ${CodeCatalog}`;
    return database.query(query);
}

const addCatalog = (name) => {
    const query = `INSERT INTO catalogs (name, active, code) values ('${name}',${true},'${generateCode(catalogPrefix,name)}')`;
    return database.query(query);
}

const updateCatalog =(idCatalog, name) => {
    const query = `UPDATE catalogs SET name = '${name}' code = '${generateCode(catalogPrefix,name)} WHERE id_catalog = ${idCatalog}`;
    return database.query(query);
}

const desactiveCatalog =(idCatalog, name) =>{
    const query = `DESACTIVE catalogs SET active = '${true}', (err,res)`;
    return database.query(query);
}

