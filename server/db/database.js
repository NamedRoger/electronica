const path = require('path');
const pathEnv = path.join(process.cwd()+'\\..','.env');

require('dotenv').config({
    path:pathEnv
});

const mysql = require('mysql');
const { resolve } = require('path');

class Db {
    constructor(){
        this.port = process.env.DB_PORT;
        this.host = process.env.DB_HOST;
        this.user = process.env.DB_USER;
        this.password = process.env.DB_PASSWORD;
        this.db = process.env.DB_DATABASE;

        this.handleConnection();
    }

    handleConnection(){
        this.conn = mysql.createPool({
            host:this.host,
            user:this.user,
            password:this.password,
            database:this.db,
            port:this.port,
        });   
    }

    query(query){
        return new Promise((resolve,reject) => {
            this.conn.query(query,(err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        });
    }

}

const database = new Db();

module.exports = database;