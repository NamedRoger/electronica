const mysql = require('mysql');

module.exports = class Db {
    constructor(){
        this.port = 3306;
        this.host = "iguanadevs.com";
        this.user = "develop";
        this.password = "5jO9w_ML!.b?";
        this.db = "ac_electronica_pruebas";

        this.conn = mysql.createConnection({
            host:this.host,
            user:this.user,
            password:this.password,
            database:this.db,
            port:this.port,
        });   

    }
}