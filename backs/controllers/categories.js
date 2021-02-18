const Db = require('../db/db');

const db = new Db();

const getCategoriesByCodeCatalog = (codeCatalog) => {
    const sql = `
    select 
	    categories.id_option as idCategoria,
	    categories.name
    from catalog_options as categories 
    inner join catalogs as c on c.id_catalog = categories.id_catalog
    where c.code = ${codeCatalog} and categories.active = 1
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
 * @param {number} idCatalog 
 */
const getCategoriesByIdCatalog = (idCatalog) => {
    const sql = `
    select * from catalog_options as categories 
    where categories.id_catalog = ${idCatalog} and active = 1
    `;
    return new Promise((resolve, reject) => {
        db.conn.query(sql,(err,res)=>{
            if (err) reject("Ocurrió un error");
            resolve(res);
            db.conn.end();
        });     

    });
}
/**
 * 
 * @param {number} id_catalog 
 * @param {string} name 
 */
const addCategories = (id_catalog,name) => {
    return new Promise((resolve,reject)=>{
        db.conn.query(`Insert into catalog_options (id_catalog,name)values ('${name}',${1},'CAT_${id_catalog}')`,(err,res)=>{
            if(err) reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}
/**
 * 
 * @param {number} id 
 * @param {string} name 
 */
const updateCategories = (id,name) =>{
    return new Promise((resolve,reject)=>{
        db.conn.query(`update catalog_options set name = ${name} where id_categories = ${id}`,(err,res)=>{
            if(err) reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}
/**
 * 
 * @param {number} id 
 */
const desactiveCategories = (id) => {
    return new Promise((resolve,reject)=>{
        db.conn.query(`update categories set active = ${false}`,(err,res)=>{
            if(err)reject(err);
                resolve(true);
                db.conn.end();
        });
    });
}
