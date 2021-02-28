const db = require('../../../db/database');


const getProduct = (idProduct) => {
    const query = `SELECT * FROM `;
    return db.query(query);
}

const getProducts = () => {
    const query = ``;
    return db.query(query);
}

const addProduct = ({}) => {
    const query = ``;
    return db.query(query);
}

const updateProduct = (idProduct,{}) =>{
    const query = ``;
    return db.query(query);
}

const desactiveProduct = (idProduct) => {
    const query = ``;
    return db.query(query);
}

module.exports = {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    desactiveProduct
}