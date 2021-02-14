const Db = require('../../db/db');

const db = new Db();

const getProviders = () => {
    const querySql = `SELECT id_provider, 
    nick_name, 
    rfc, 
    razon_social, 
    tel, cel, 
    email, parcel, addresss, city, state, country
    FROM providers WHERE active = ${true}`;

    return new Promise((resolve, reject) => {
        db.conn.query(querySql, (err, res) => {
            if (err) reject(err);

            resolve(res);
        });
        db.conn.end();
    });
};

/**
 * @param {number} id 
 */

const getProvider = (id) => {
    const sqlQuery = `
        select * 
        from providers
        where id_provider = ${id} 
    `;
    return new Promise((resolve, reject) => {
        db.conn.query(sqlQuery, (err, res) => {
            if (err) reject(err);

            db.conn.end();
            resolve(res);
        })

    });
}

/**
 * @param {object} provider objeto de proveedor
 * 
 */
const addProvider = ({ name, rfc, razonSocial, tel, cel, email, parcel, address, city, state, country, zip }) => {
    const sqlQuery = `insert into 
    providers(nick_name,rfc,razon_social,tel,cel,email,parcel,addresss,city,state,country,zip,active)
    values ('${name}','${rfc}','${razonSocial}','${tel}','${cel}','${email}','${parcel}','${address}','${city}','${state}','${country}','${zip}',${true})`;

    return new Promise((resolve, reject) => {
        db.conn.query(sqlQuery, (err, res) => {
            if (err) reject(err);

            db.conn.end();
            resolve(res);
        });
    })
}

/**
 * 
 * @param {number} id 
 * @param {object} provider 
 */
const updateProvider = (id, { name, rfc, razonSocial, tel, cel, email, parcel, address, city, state, country, zip }) => {
    const sqlQuery = `insert into 
    providers(nick_name,rfc,razon_social,tel,cel,email,parcel,addresss,city,state,country,zip,active)
    values ('${name}','${rfc}','${razonSocial}','${tel}','${cel}','${email}','${parcel}','${address}','${city}','${state}','${country}','${zip}',${true})`;

    return new Promise((resolve, reject) => {
        db.conn.query(sqlQuery, (err, res) => {
            if (err) reject(err);

            db.conn.end();
            resolve(res);
        });
    })
}

/**
 * 
 * @param {number} id 
 */
const desactiveProvider = (id) => {
    const sqlQuery = `
        update providers set active = ${false}
    `;

    return new Promise((resolve,reject) => {
        db.conn.query(sqlQuery,(err,res) => {
            if(err) reject(err);

            resolve(res);
        });
    });
}

module.exports = {
    getProvider,
    getProviders,
    addProvider,
    updateProvider,
    desactiveProvider
}