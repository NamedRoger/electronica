const db = require('../../../db/database');

const getProviders = (idProduct) => {
    const query = (`SELECT pp.id_product_providers,
    pp.id_product,
    pp.id_provider,
    prov.nick_name,
    prov.razon_social,
    pp.sales_unit
    FROM producto_providers AS pp
    INNER JOIN providers AS prov ON prov.id_provider = pp.id_provider
    INNER JOIN products AS prod ON prod.id_product = pp.id_product
    WHERE prod.id_product = ${idProduct}`)
    return db.query(query)
}

const addProvider = ({id_product,id_provider,sales_unit}) => {
    const query = (`INSERT INTO producto_providers (id_product, id_provider, sales_unit)
    VALUES(${id_product},${id_provider},'${sales_unit}')`);
        return db.query(query)
}

const updateProvider = (idProductProvider,{idProvider,sales_unit}) => {
    const query = (`UPDATE producto_providers SET sales_unit = '${sales_unit}' WHERE id_product_providers = ${idProductProvider}`);
    return db.query(query)
}

const deleteProvider = (idProductProvider) => {
    const query = (`DELETE FROM producto_providers WHERE id_product_providers = ${idProductProvider}`);
    return db.query(query)
}

module.exports = {
    getProviders,
    addProvider,
    updateProvider,
    deleteProvider
}
