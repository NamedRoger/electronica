const Db = require('../db/db');

const db = new Db();

const getRepresentativesByidProvider = (idProvider) =>{
    const sql = `
    select 
	    * from representatives where id_provider = ${idProvider}  
    `;
    return new Promise((resolve, reject) => {
        db.conn.query(sql, (err, res) => {
            if (err) reject("Ocurrió un error");
            resolve(res);
            db.conn.end();
        });
    });
}

const addRrepresentatives = ({ name, last_name, tel, cel, email,parcel, addresss, city, state, country,zip, id_provider }) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Insert into provider_representatives (name, last_name, tel, cel, email,parcel, addresss, city, state, country,zip, id_provider) values('${name}',${last_name}',${tel}',${cel}',${email}',${parcel}',${addresss}',${city}',${state}',${country}',${zip}',${id_provider}')`,(err,res) =>{
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        });
     });
}

const updateRepresentative = ({ name, last_name, tel, cel, email,parcel, addresss, city, state, country,zip, id_provider }) => {
    return new Promise((resolve,reject) => {
        db.conn.query(`Update representatives set name = ${name}  last_name ='${last_name}' tel = '${tel}' cel = '${cel}' email = '${email}' parcel = '${parcel}' addresss = '${addresss}' city = '${city}' state = '${state}' country = '${country}' zip = '${zip}'  where id_provider = ${id_provider}'`,(err,res) =>{
            if (err)reject(err);
            resolve(true);
            db.conn.end();
        });
    });
}

const desactiveRepresentative = ({ name, last_name, tel, cel, email,parcel, addresss, city, state, country,zip, id_provider }) =>{
    return new Promise ((resolve,reject) =>{
        db.conn.query(`update representative set active = ${false} where id_provider = ${id_provider}`,(err,res) => {
            if(err)reject(err);
            resolve(true);
            db.conn.end();
        
        });
    });
}

module.exports = {
    getRepresentativesByidProvider,
    addRrepresentatives,
    updateRepresentative
}