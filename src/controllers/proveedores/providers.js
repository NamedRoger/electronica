const Db = require('../../db/db');

const db = new Db();

const getProviders = () => {
    const querySql = `SELECT id_provider, 
    nick_name, 
    rfc, 
    razon_social, 
    tel, cel, 
    email, parcel, addresss, city, state, country
    FROM providers WHERE acttive = ${true}`;
    
    return new Promise((resolve,reject) => {
        db.conn.query(querySql,(err,res) => {
            if(err) reject(err);

            resolve(res);
        });
    });
};

const getProvider = (id) => {
    const querySql = `SELECT 
    FROM providers
    WHERE id_provider = ${id}`;
    return new Promise();
}

const addProvider = () => {
    return new Promise((resolve,reject)=> {
        db.conn.query(``,(err, res)=>{
            if(err) reject(err);

            res(true);
            
        })
    });
}

const updateProvider = () => {

}

const desactiveProvider = () => {

} 

