const Db = require('../../db/db');

const db = new Db();

class Catalog {
    constructor(name) {
        this.active = true;
        this.name = name;
        this.code = `CAT_${name.toUpperCase()}`;
    }
}

const catalogs = [
    new Catalog("Productos_categorias"),
    new Catalog("Precios_cliente"),
    new Catalog("Clientes_categorias")
];

const execute = async () => {
    await insertCatalogs();
}

const insertCatalogs = async () => {
    Promise.all(catalogs.map(insertCatalog)).then(res => db.conn.end()).catch(err => {
        db.conn.end();
    });
};

const insertCatalog = (catalog) => {
    return new Promise((resolve, rejec) => {
        db.conn.connect(err => {
            if (err) rejec(err);

            db.conn.query(`insert into catalogs (name,code,active) values (${catalog.name},${catalog.code},${catalog.active})`,
                (err, res) => {
                    if (err) rejec(err);
                    resolve(true);
                });
        });

    });
}

module.exports = execute;