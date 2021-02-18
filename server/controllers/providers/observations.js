const path = require('path');
const pathEnv = path.join(process.cwd()+'\\..','..','.env');
require('dotenv').config({
    path:pathEnv
});
const db = require('../../db/database');
const database = new db();

const getObservationByProvider = (id_provider, id_observation) => {
    const query = `SELECT FROM provider_observation WHERE id_provider = ${idProvider}`;
    return database.query(query);
}

const addObservation = (id_provider,id_observation) =>{
    const query = `INSERT INTO provider_observation(id_provider,id_observation) VALUES(${idProvider},'${id_observation}')`;
    return database.query(query);
}

const updateObservation = (id_observation, description) => {
    const query = `UPDATE provider_observation SET description = '${description}' WHERE id_observation = ${id_observation}`;
    return database.query(query);
}

const deleteObservation = (id_observation) => {
    const query = `DELETE FROM provider_observation WHERE id_observation = ${id_observation}`;
    return database.query(query);
}

