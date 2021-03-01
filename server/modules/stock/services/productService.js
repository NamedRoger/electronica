const db = require('../../../db/database');

const getProducts = () => {
    const query = `SELECT id_product, alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
    maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat
    FROM products
    WHERE acttive = 1`;
    return db.query(query);
}

const getProduct = (idProduct) => {
    const query = `SELECT id_product, alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
    maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat
    FROM products
    WHERE acttive = 1
    AND id_product = ${idProduct}`;
    return db.query(query);
}

const addProduct = ({alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
    maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat}) => {
    const query = `INSERT INTO products (alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
        maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat) VALUES ('${alternative_key}','${web}','${description}',
        ${id_category},'${caracteristics}','${stock}','${minimun_order}','${maximum_order}','${sales_unit}',
        '${foto}','${ubication}','${price}','${sat_key}','${unit_sat}')`;
    return db.query(query);
}

const updateProduct = (idProduct,{alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
    maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat}) =>{
    const query = `UPDATE products SET alternative_key = '${alternative_key}', web = '${web}', description = '${description}',
     id_category = '${id_category}', caracteristics = '${caracteristics}', stock = '${stock}', mimimun_order = '${minimun_order}',
     maximum_order = '${maximum_order}', sales_unit = '${sales_unit}', foto = '${foto}', ubication = '${ubication}', price = '${price}', 
     sat_key = '${sat_key}', unit_sat = '${unit_sat}'
     WHERE idProduct = ${idProduct}`;
    return db.query(query);
}

const desactiveProduct = (idProduct) => {
    const query = `UPDATE products SET active = ${false} WHERE idProduct = ${idProduct}`;
    return db.query(query);
}

module.exports = {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    desactiveProduct
}