const db =require('../config/db.js');
const fetch = require('node-fetch');

const heroController = {
    getHeroesList : async function(req, res) {
        const query = {
                key: process.env.STEAM_KEY,
                language:'en_us'
                
            };

        //let heroList = await fetch(`http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1?`+ new URLSearchParams(options.query));
        let heroList = await fetch ('https://api.opendota.com/api/heroes');
        heroList = await heroList.json();
        //console.log(heroList);
        //res.render('hero', {heroes:heroList.result.heroes});
        res.render('hero', {heroes:heroList});
    },
    getHeroPage:async function(req,res){
        //todo
    }
};
module.exports = heroController;