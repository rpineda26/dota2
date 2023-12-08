const express = require('express');
const router = express.Router();
router.get('/', function(req,res){res.render('layouts/index')});
module.exports = router;

