const Db = require('../db/db');

const db = new Db();


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


 
const addObservations = (idProvider,description) =>{
    return new Promise((resolve,reject)=>{
        db.conn.query(`Insert into provider_observations (idProvider,description) values('${idProvider}',${description}')`,(err,res)=>{
            if(err) reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}

const updateObservations = (idObservations,description) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Update provider_observations set description = ${description} where id_observations = ${idObservations}`,(err,res) =>{
            if(err) reject(err);
            resolve(true); 
            db.conn.end();
        });
    });
}



const desactiveObservations = (idObservations,description) => {
    return new Promise ((resolve,reject)=>{
        db.conn.query(`Update provider_observations set active = ${false} where id_observations = ${idObservations}`,(err,res) => {
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        });
    }); 
}


