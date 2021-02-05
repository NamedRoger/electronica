const DB = require('../db/db');

const db = new DB();

const getCatalogs = () => {
    return new Promise((resolve,reject) =>{
        db.conn.query("select * from catalogs_view",(err,res) => {
            if(err) reject("ocurrio un error");
            resolve(res);
            db.conn.end();
        });
    });    
}


const getCategories = () => {
    return new Promise((resolve,reject) =>{
        db.conn.query("select * from catalog_options where id_catalog = 1",(err,res) => {
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
            db.conn.end();
        });
    });
}

const updateCatalog = (id,nombre) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`update catalogs set nombre = ${nombre} where id_catalog = ${id}`,(err,res) =>{
            if(err) reject(err);
            resolve(true); 
            db.conn.end();
        });
    });
}

const desactiveCatalog = (id) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`update catalogs set active = ${false}`,(err,res) => {
            if(err)reject(err);
            resolve(true);
        });
    });
}




