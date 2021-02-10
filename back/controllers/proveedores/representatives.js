const Db = require('../db/db');

const db = new Db();

const getRepresentativesByidProvider = (idProvider) =>{
    const sql = `
    select 
	    * from provider_representatives where id_provider = ${idProvider}  
    `;
    return new Promise((resolve, reject) => {
        db.conn.query(sql, (err, res) => {
            if (err) reject("Ocurrió un error");
            resolve(res);
            db.conn.end();
        });
    });
}

const addRrepresentatives = ({ name, rfc, razonSocial, tel, cel, email, parcel, address, city, state, country, zip }) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Insert into provider_banks ({ name, rfc, razonSocial, tel, cel, email, parcel, address, city, state, country, zip }) values('${idProvider}',${name}'${bank_account}'${bank_key})`,(err,res) =>{
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        });
     });
}

