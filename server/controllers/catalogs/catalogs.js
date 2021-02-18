const db = require('../../db/database');
const database = new db();

const catalogPrefix = 'CAT';

const getCatalogByCode = (CodeCatalog) => {
    const query = `SELECT id_catalog FROM id_catalog WHERE active = 1`;

}

const addCatalog = (name) => {
    const query = `INSERT INTO catalogs (name, active, code) values ('${name}',${true},'${generateCode(catalogPrefix,name)}')`;
    database.query(query) 
}
