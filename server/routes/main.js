const express = require('express');
const router = express.Router();
const heroController = require('../controllers/hero_controller.js');
const itemController = require('../controllers/item_controller.js');

router.get('/', function(req,res){res.render('layouts/index')});
router.get('/getHeroes', heroController.getHeroesList);
router.get('/hero', heroController.getHeroesList);
router.get('/hero/:hero_name', heroController.getHeroPage);
router.get('/item', itemController.getItemsList);
router.get('/item/:item_name', itemController.getItemPage); 


module.exports = router;
