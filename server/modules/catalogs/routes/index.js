var express = require('express');
var router = express.Router();


const catalogsController = require('../controllers/catalogs');

/* GET users listing. */
router.get('/', catalogsController.getCatalgos);
router.get('/:code', catalogsController.getCatalogByCode);


router.post('/',(req,res,next) => {
    res.send('esto es un post');
});

router.put('/',(req,res,next) => {

});

router.delete('/',(req,res,next) => {});

//catalog options

module.exports = router;