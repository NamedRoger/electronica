var express = require('express');
const { route } = require('./users');
var router = express.Router();

const catalogsController = require('../modules/catalogs/services/catalogs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  catalogsController.getCatalogs();
});

router.post('/',(req,res,next) => {
    res.send('esto es un post');
});

router.put('/',(req,res,next) => {

});

router.delete('/',(req,res,next) => {});

module.exports = router;