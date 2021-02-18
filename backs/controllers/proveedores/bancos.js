const Db = require('../db/db');

const db = new Db();

/**
 * 
 * @param {number} idProvider Para el id del provedor
 */

const getBanksByIdProvider = (idProvider) => {
    const sql = `
    select 
	    * from provider_banks where id_provider = ${idProvider}
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
 * @param {string} name 
 * @param {string} bank_account 
 * @param {string} bank_key 
 */
const addBanks = (idProvider, name, bank_account, bank_key) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Insert into provider_banks (idProvider, name, bank_account, bank_key) values('${idProvider}',${name}'${bank_account}'${bank_key})`,(err,res) =>{
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        });
     });
}
/**
 * 
 * @param {number} idBank 
 * @param {number} idProvider 
 * @param {string} name 
 * @param {string} bank_account 
 * @param {string} bank_key 
 */

const updateBanks = (idBank,idProvider, name, bank_account, bank_key) => {
    return new Promise ((resolve,reject)=>{
        db.conn.query(`Update provider_banks set name = ${name}  bank_account ='${bank_account}' bank_key = ${bank_key}  where id_bank = ${idBank}'`,(err,res) =>{
            if (err)reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}

/**
 * 
 * @param {number} idBank 
 * @param {number} idProvider 
 * @param {string} name 
 * @param {string} bank_account 
 * @param {string} bank_key 
 */


const deleteBanks = (idBank) => {
    const querysql = `
        Delete from provider_banks where id_banks = ${idBank}
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
    getBanksByIdProvider,
    addBanks,
    updateBanks,
    deleteBanks
}