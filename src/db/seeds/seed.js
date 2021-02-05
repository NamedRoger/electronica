const catalogsSeeds = require('../../db/seeds/catalogs-seds');

const main = async () => {
    await catalogsSeeds();
}

(async() => {
    await main();
})();