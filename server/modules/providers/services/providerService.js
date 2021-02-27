const database = require('../../../db/database');


const getProviders = () => {
    const query = `SELECT id_provider,
    nick_name, rfc, razon_social, tel, cel,
    email, parcel, address, city, state, country, zip
    FROM providers
    WHERE active = 1`;

    return database.query(query);
}

const getProvider = (idProvider) => {
    const query = `SELECT id_provider,
    nick_name, rfc, razon_social, tel, cel,
    email, parcel, address, city, state, country, zip
    FROM providers
    WHERE active = 1
    AND id_provider = ${idProvider}`;
    return database.query(query);
}

const addProvider = ({nickName, 
    rfc, 
    razonSocial, 
    tel,
    cel,
    email,
    parcel, address, city, state, country,zip}) => {
    
    const query = `INSERT INTO 
    providers(nick_name, rfc,razon_social,tel,cel, email,parcel, address, city, state, country, zip,active)
    VALUES ('${nickName}', '${rfc}', '${razonSocial}',
    '${tel}','${cel}','${email}','${parcel}','${address}','${city}', '${state}', '${country}','${zip}',${true})`;

    return database.query(query);
}

const updateProvider = (idProvider,{nickName, 
    rfc, 
    razonSocial, 
    tel,
    cel,
    email,
    parcel,address, city, state, country,zip}) => {
    
    const query = `UPDATE providers SET nick_name = '${nickName}', rfc = '${rfc}', 
    razon_social = '${razonSocial}', tel = '${tel}', cel='${cel}', email = '${email}', parcel = '${parcel}',
    address = '${address}', city = '${city}', state = '${state}', country = '${country}', zip = '${zip}'
    WHERE id_provider = ${idProvider}`;

    return database.query(query);
}

const desactiveProvider = (idProvider) => {
    const query = `UPDATE providers SET active = ${false} WHERE id_provider = ${idProvider}`;
    return database.query(query);
}

module.exports = {
    getProvider, 
    getProviders,
    addProvider,
    updateProvider,
    desactiveProvider
}