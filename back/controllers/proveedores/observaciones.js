const Db = require('../db/db');

const db = new Db();

/**
 * 
 * @param {number} idProvider 
 */


const getObservationsByIdProvider = (idProvider) => {
    const sql = `
    select 
	    * from provider_observations where id_provider = ${idProvider}
    `;
    return new Promise((resolve, reject) => {
        db.conn.query(sql, (err, res) => {
            if (err) reject("Ocurrió un error");
            resolve(res);
            db.conn.end();
        });

    });
}

/**
 * 
 * @param {number} idProvider 
 * @param {string} description 
 */
 
const addObservations = (idProvider,description) =>{
    return new Promise((resolve,reject)=>{
        db.conn.query(`Insert into provider_observations (idProvider,description) values('${idProvider}',${description}')`,(err,res)=>{
            if(err) reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}

/**
 * 
 * @param {number} idObservations 
 * @param {string} description 
 */

const updateObservations = (idObservations,description) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Update provider_observations set description = ${description} where id_observations = ${idObservations}`,(err,res) =>{
            if(err) reject(err);
            resolve(true); 
            db.conn.end();
        });
    });
}

/**
 * 
 * @param {number} idObservations 
 * @param {string} description 
 */

const deleteObservation = (idObservations) => {
    const querysql = `
        Delete from provider_observations where id_observations = ${idObservations}
            `;
        return new Promise ((resolve,reject) =>{
            db.conn.query(querysql, (err,res) => {
                if(err)reject(err);
                resolve(true);
                db.conn.end();
            
            });
        });
    }




module.exports = {
    getObservationsByIdProvider,
    addObservations,
    updateObservations,
    deleteObservation
}
