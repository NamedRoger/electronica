const path = require('path');
const pathEnv = path.join(process.cwd()+'\\..','..','.env');
require('dotenv').config({
    path:pathEnv
});
const db = require('../../../db/database');
const database = new db();

const getCustomer  = (idCustomer) => {
    
}

const getCustomers = () => {

}

const addCustomer = () => {

}

const updateCustomer = () => {

}

const desactiveCustomer = () => {

}