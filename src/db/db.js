const mysql = require('mysql');

module.exports = class Db {
    constructor(){
        this.port = 3306;
        this.host = "localhost";
        this.user = "root";
        this.password = "root";
        this.db = "ac_electronica";

        this.conn = mysql.createConnection({
            host:this.host,
            user:this.user,
            password:this.password,
            database:this.db,
            port:this.port,
        });   

    }
}
