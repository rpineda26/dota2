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
        let hero = await fetch(`https://api.opendota.com/api/heroes/${req.params.hero_id}/matches`);
        let item = await fetch(`https://api.opendota.com/api/heroes/${req.params.hero_id}/itemPopularity`);
        hero = await hero.json();
        item = await item.json();
        let duration = 0;
        let win=0;
        for(let i=0;i<hero.length;i++){
            if(hero[i].radiant_win){
                win++;
            }
            duration+=hero[i].duration;
        }
        duration = duration/hero.length;
        win = win/hero.length;
        const options = {
            key: process.env.STEAM_KEY,
            language:'en_us'
        };
        let game_items = await fetch('https://api.opendota.com/api/constants/items');

        game_items = await game_items.json()
        let start_items = [];
        for(const [key,value] of Object.entries(item.start_game_items)){
            start_items.push(`${key}, ${value}`);
        }
        const start_items_id  = start_items.map(element => parseInt(element.split(',')[0]));
        const start_items_count = start_items.map(element => parseInt(element.split(',')[1]));
        let early_items = [];
        for(const [key,value] of Object.entries(item.early_game_items)){
            early_items.push(`${key}, ${value}`);
        }
        const early_items_id  = early_items.map(element => parseInt(element.split(',')[0]));
        const early_items_count = early_items.map(element => parseInt(element.split(',')[1]));
        let mid_items = [];
        for(const [key,value] of Object.entries(item.mid_game_items)){
            mid_items.push(`${key}, ${value}`);
        }
        const mid_items_id  = mid_items.map(element => parseInt(element.split(',')[0]));
        const mid_items_count = mid_items.map(element => parseInt(element.split(',')[1]));

        let late_items = [];
        for(const [key,value] of Object.entries(item.late_game_items)){
            late_items.push(`${key}, ${value}`);
        }
        const late_items_id  = late_items.map(element => parseInt(element.split(',')[0]));
        const late_items_count = late_items.map(element => parseInt(element.split(',')[1]));

        let list_items = [];
        for(let i in game_items) { 
            list_items.push([i,game_items[i]]); 
         }; 
        //console.log(list_items[0][1].id);
       //console.log(start_items_id);
       let popular_items = {start_game_items:[],early_game_items:[],mid_game_items:[],late_game_items:[]};
       for(let i=0;i<start_items_id.length;i++){
           for(let j=0;j<list_items.length;j++){
               if(start_items_id[i]==list_items[j][1].id){
                   popular_items.start_game_items.push(list_items[j][1]);
                   popular_items.start_game_items[popular_items.start_game_items.length-1].count = start_items_count[i];
                   popular_items.start_game_items[popular_items.start_game_items.length-1].name = list_items[j][0];
                   popular_items.start_game_items[popular_items.start_game_items.length-1].img = `http://cdn.dota2.com/apps/dota2/images/items/${popular_items.start_game_items[popular_items.start_game_items.length-1].name }_lg.png`
                   j= list_items.length;
               };
           }
        }
        for(let i=0;i<early_items_id.length;i++){
            for(let j=0;j<list_items.length;j++){
                if(early_items_id[i]==list_items[j][1].id){
                    popular_items.early_game_items.push(list_items[j][1]);
                    popular_items.early_game_items[popular_items.early_game_items.length-1].count = early_items_count[i];
                    popular_items.early_game_items[popular_items.early_game_items.length-1].name = list_items[j][0];
                    popular_items.early_game_items[popular_items.early_game_items.length-1].img = `http://cdn.dota2.com/apps/dota2/images/items/${popular_items.early_game_items[popular_items.early_game_items.length-1].name }_lg.png`
                    j= list_items.length;
                };
            }
         }
        for(let i=0;i<mid_items_id.length;i++){
            for(let j=0;j<list_items.length;j++){
                if(mid_items_id[i]==list_items[j][1].id){
                    popular_items.mid_game_items.push(list_items[j][1]);
                    popular_items.mid_game_items[popular_items.mid_game_items.length-1].count = mid_items_count[i];
                    popular_items.mid_game_items[popular_items.mid_game_items.length-1].name = list_items[j][0];
                    popular_items.mid_game_items[popular_items.mid_game_items.length-1].img = `http://cdn.dota2.com/apps/dota2/images/items/${popular_items.mid_game_items[popular_items.mid_game_items.length-1].name }_lg.png`
                    j= list_items.length;
                };
            }
         }
        for(let i=0;i<late_items_id.length;i++){
            for(let j=0;j<list_items.length;j++){
                if(late_items_id[i]==list_items[j][1].id){
                    popular_items.late_game_items.push(list_items[j][1]);
                    popular_items.late_game_items[popular_items.late_game_items.length-1].count = late_items_count[i];
                    popular_items.late_game_items[popular_items.late_game_items.length-1].name = list_items[j][0];
                    popular_items.late_game_items[popular_items.late_game_items.length-1].img = `http://cdn.dota2.com/apps/dota2/images/items/${popular_items.late_game_items[popular_items.late_game_items.length-1].name }_lg.png`
                    j= list_items.length;
                };
            }
         }
         console.log(popular_items.late_game_items);
        res.render('indiv_hero',{duration:duration,win:win, total:hero.length, item:popular_items, name: req.query.name});
    }
};
module.exports = heroController;