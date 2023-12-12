const db =require('../config/db.js');
const fetch = require('node-fetch');

const playerController = {
    getPlayerPage : async function(req,res){
        res.render('player');
    }
};
module.exports = playerController;