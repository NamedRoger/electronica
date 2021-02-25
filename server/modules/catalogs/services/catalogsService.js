const db = require('../../../db/database');
const {generateCode} = require('../../../helpers');
const database = new db();

const catalogPrefix = 'CAT';

const getCatalogByCode = (CodeCatalog) => {
    const query = `SELECT id_catalog, name, code FROM catalogs WHERE active = 1 AND code = '${CodeCatalog}'`;
    return database.query(query);
}

const getCatalogById = (idCatalog) =>{
    const query = `SELECT id_catalog, name, code FROM catalogs WHERE id_catalog = ${idCatalog}`;
    return database.query(query);
}

const getCatalogs = () => {
    const query = `SELECT id_catalog, name FROM catalogs WHERE active = 1`;
    return database.query(query);
}

const addCatalog = (name) => {
    const query = `INSERT INTO catalogs (name, active, code) values ('${name}',${true},'${generateCode(catalogPrefix,name)}')`;
    return database.query(query);
}

const updateCatalog =(idCatalog, name) => {
    const query = `UPDATE catalogs SET name = '${name}', code = '${generateCode(catalogPrefix,name)} WHERE id_catalog = ${idCatalog}`;
    return database.query(query);
}

const desactiveCatalog =(idCatalog) =>{
    const query = `UPDATE catalogs SET active = '${true}' WHERE id_catalog = ${idCatalog}`;
    return database.query(query);
}


module.exports = {
    getCatalogByCode,
    getCatalogById,
    getCatalogs,
    addCatalog,
    updateCatalog,
    desactiveCatalog
}
