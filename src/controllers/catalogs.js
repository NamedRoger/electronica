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

const getCatalogById = () => {

}

const getCatalogByCode = () => {
    
}

const addCatalog = (name) =>{
    const code = generateCode(name);
    return new Promise((resolve,reject) => {
        db.conn.query(`insert into catalogs (name,active,code) values ('${name}',${1},'CAT_${code}')`,(err,res) => {
            if(err) reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}

const updateCatalog = (id,nombre) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`update catalogs set name = ${nombre} where id_catalog = ${id}`,(err,res) =>{
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
            db.conn.end();
        });
    });
}

const generateCode = (name) => {
    let spltiName = name.split(/[\s_-]/);
    let code = "";
    spltiName.forEach(s => {
        if(s.length <5){
            code += s;
        }else{
            code += s.slice(0,5);
        }
    });
    return code.toUpperCase();
}
