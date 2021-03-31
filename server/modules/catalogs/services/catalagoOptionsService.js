const database = require('../../../db/database');

/**
 * 
 * @param {numbre} idCatalog 
 */
const getOptions = (idCatalog) => {
    const query = `SELECT id_option, name, active FROM catalog_options WHERE id_catalog = ${idCatalog}`;
    return database.query(query);
}

const addOption = (idCatalog,name) => {
    const query = `INSERT INTO catalog_options(id_catalog,name,active) VALUES('${idCatalog}','${name}',${true})`;
    return database.query(query);
}

const updateOption = (idOption,name) => {
    const query = `UPDATE catalog_options SET name = '${name}' WHERE id_option = ${idOption}`;
    return database.query(query);
}

const desactiveOption = (idOption) => {
    const query = `UPDATE catalog_options SET active = ${false} WHERE id_option = ${idOption}`;
    return database.query(query);
}

const activeOption = (idOption) => {
    const query = `UPDATE catalog_options SET active = ${true} WHERE id_option = ${idOption}`;
    return database.query(query);
}


module.exports = {
    getOptions,
    addOption,
    updateOption,
    desactiveOption,
    activeOption
}