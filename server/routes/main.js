const express = require('express');
const router = express.Router();
const heroController = require('../controllers/hero_controller.js');
const itemController = require('../controllers/item_controller.js');
const playerController = require('../controllers/player_controller.js');

router.get('/', function(req,res){res.render('landing_page',{layout: false})});

router.get('/getHeroes', heroController.getHeroesList);
router.get('/hero', heroController.getHeroesList);
router.get('/hero/:hero_id', heroController.getHeroPage);
//router.get('/item', itemController.getItemsList);
//router.get('/item/:item_name', itemController.getItemPage); 
router.get('/player', playerController.getPlayerPage);
router.get('/player/:player_name', playerController.getPlayerPage);
router.get('/player/:player_id', playerController.getPlayerPage);


module.exports = router;
