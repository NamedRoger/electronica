const Db = require('../db/db');

const db = new Db();

/**
 * 
 * @param {number} idProvider 
 */

const getNotasByIdProvider = (idProvider) => {
    const sql = `
    select 
	    * from provider_notes where id_provider = ${idProvider}
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
const addNotas = (idProvider,description) =>{
    return new Promise((resolve,reject)=>{
        db.conn.query(`Insert into provider_notes (idProvider,description) values('${idProvider}',${description}')`,(err,res)=>{
            if(err) reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}

/**
 * 
 * @param {number} idNote 
 * @param {string} description 
 */

const updateNotas = (idNote,description) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Update provider_notes set description = ${description} where id_note = ${idNote}`,(err,res) =>{
            if(err) reject(err);
            resolve(true); 
            db.conn.end();
        });
    });
}

/**
 * 
 * @param {number} idNote 
 * @param {string} description 
 */

const desactiveNotas = (idNote,description) => {
    return new Promise ((resolve,reject)=>{
        db.conn.query(`Update provider_notes set active = ${false} where id_note = ${idNote}`,(err,res) => {
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        });
    }); 
}


module.export = {
    addNotas,
    getNotasByIdProvider,
    updateNotas,
}

