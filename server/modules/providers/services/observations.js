const database = require('../../../db/database');

const getObservationByProvider = (id_provider) => {
    const query = `SELECT id_observation, description FROM provider_observations WHERE id_provider = ${id_provider}`;
    return database.query(query);
}

const addObservation = (id_provider, description) =>{
    const query = `INSERT INTO provider_observations (id_provider, description) VALUES(${id_provider},'${description}')`;
    return database.query(query);
}

const updateObservation = (id_observation, description) => {
    const query = `UPDATE provider_observations SET description = '${description}' WHERE id_observation = ${id_observation}`;
    return database.query(query);
}

const deleteObservation = (id_observation) => {
    const query = `DELETE FROM provider_observations WHERE id_observation = ${id_observation}`;
    return database.query(query);
}

module.exports = {
    getObservationByProvider,
    addObservation,
    updateObservation,
    deleteObservation
}
