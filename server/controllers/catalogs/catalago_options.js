const Db = require('../../db/database');

const database = new Db();

const getOptionsByCodeCatalog = (codeCatalog) => {
    const query = `SELECT id_option, name, active FROM catalog_options`;
    database.query(query);
}

const addOption = () => {
}