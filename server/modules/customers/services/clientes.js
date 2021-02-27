const db = require ('../../../db/database');

const database = new db ();

const getClientes = () => {
    const query =  `SELECT  id_customer, register_key, id_category, presentative, 
    tel_customer, cel_customer, email, note, address, city, state, country, 
    razon_social, rfc, bank, bank_key, price_number, business, tel_business, cel_business
    FROM customers
    WHERE active = 1`;
    return database.query(query);
}

const getCliente = (idCliente) => {
    const query =  `SELECT  id_customer, register_key, id_category, presentative, 
    tel_customer, cel_customer, email, note, address, city, state, country, 
    razon_social, rfc, bank, bank_key, price_number, business, tel_business, cel_business
    FROM customers
    WHERE active = 1`;
    `AND id_customer = ${idCliente}`;
    return database.query(query);
}

const addCliente = ({register_key, id_category, presentative, 
    tel_customer, cel_customer, email, note, address, city, state, country, 
    razon_social, rfc, bank, bank_key, price_number, business, tel_business, cel_business}) => {
        
    const query = `INSERT INTO customers ( register_key, id_category, presentative, 
        tel_customer, cel_customer, email, note, address, city, state, country, 
        razon_social, rfc, bank, bank_key, price_number, business, tel_business, cel_business) VALUES ('${register_key}',
        ${id_category},'${presentative}','${tel_customer}','${cel_customer}','${email}','${note}','${address}','${city}','${state}',
        '${country}','${razon_social}','${rfc}','${bank}','${bank_key}',${price_number},'${business}','${tel_business}',
        '${cel_business}','${true}') `;
        return database.query(query);
    }

const updateCliente = (id_customer,{register_key, id_category, presentative, 
        tel_customer, cel_customer, email, note, address, city, state, country, 
        razon_social, rfc, bank, bank_key, price_number, business, tel_business, cel_business}) => {
        
        const query = `UPDATE providers SET register_key = '${register_key}', id_category = ${id_category}, presentative = '${presentative}',
        tel_customer = '${tel_customer}', cel_customer = '${cel_customer}', email = '${email}', note = ´${note}', address = '${address}',
        city = '${city}', state = '${state}', country = '${country}', razon_social = '${razon_social}', rfc = '${rfc}', 
        bank = '${bank}', bank_key = '${bank_key}', price_number = ${price_number}, business = '${business}',
        tel_business = '${tel_business}', cel_business = '${cel_business}',
        WHERE id_customer = ${id_customer}`;

    return database.query(query);
        
}

const desactiveCustomer = (id_customer) => {
    const query = `UPDATE customers SET active = ${false} WHERE id_customer = ${id_customer}`;
    return database.query(query);
}

module.exports = {
    getCliente, 
    getClientes,
    addCliente,
    updateCliente,
    desactiveCustomer
}

