const Db = require('../db/db');

const conn = require('../db/db');

const db = new conn();

const getCatalogs = () => {
    return new Promise((resolve,reject) =>{
        db.conn.query("select * from catalogs_view",(err,res) => {
            if(err) reject("ocurrio un error");
            resolve(res);
            db.conn.end();
        });
    });    
}


const addCatalog = (nombre) =>{
    return new Promise((resolve,reject) => {
        db.conn.query(`insert into catalogs (name,active) vaulues (${nombre},${true})`,(err,res) => {
            if(err) reject("ocurrio un error");
            resolve(true);
        });
    });
}

