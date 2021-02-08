const Db = require('../db/db');

const db = new Db();

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

const addBanks = (idProvider, name, bank_account, bank_key) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Insert into provider_banks (idProvider, name, bank_account, bank_key) values('${idProvider}',${name}'${bank_account}'${bank_key})`,(err,res) =>{
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        });
     });
}

const updateBanks = (idBank,idProvider, name, bank_account, bank_key) => {
    return new Promise ((resolve,reject)=>{
        db.conn.query(`Update provider_banks set name = ${name}  bank_account ='${bank_account}' bank_key = ${bank_key}  where id_bank = ${idBank}'`,(err,res) =>{
            if (err)reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}

const desactiveBanks = (idBank,idProvider,name,bank_account,bank_key) =>{
    return new Promise ((resolve,reject) =>{
        db.conn.query(`update provider_banks set active = ${false} where id_bank = ${idBank}`,(err,res) => {
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        
        });
    });
}

