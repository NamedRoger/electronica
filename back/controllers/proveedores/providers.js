const Db = require('../../db/db');

const db = new Db();

const getProviders = () => {
    return new Promise((resolve, reject) => {
        db.conn.query(`select * from providers where active = 1`, (err, res) => {
            if (err) reject(err);
            return resolve(res);
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
    values ('${name}','${rfc}','${razonSocial}','${tel}','${cel}','${email}','${parcel}','${address}','${city}','${state}','${country},${zip},${1}')`;

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

}

/**
 * 
 * @param {number} id 
 */
const desactiveProvider = (id) => {

}
