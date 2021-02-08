const Db = require('../../db/db');

const db = new Db();

const getProviders = () => {
    return new Promise((resolve,reject) => {
        db.conn.query(`select * from providers_view`);
    });
};

const getProvider = (id) => {
    return new Promise();
}

const addProvider = () => {

}

const updateProvider = () => {

}

const desactiveProvider = () => {

}
