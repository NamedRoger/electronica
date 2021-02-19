var express = require('express');
const { route } = require('./users');
var router = express.Router();

const catalogsController = require('../controllers/catalogs/catalogs');

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