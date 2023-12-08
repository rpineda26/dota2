
const path = require('path');
require('dotenv').config({path:path.resolve(__dirname,'./.env')});
const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./server/routes/main.js');
const db = require('./server/config/db.js');
const app = express();
const PORT =  process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
app.engine("hbs", exphbs.engine({
	extname: 'hbs', defaultLayout:'index', helpers:{
		inc: function(value){
			return parseInt(value)+1;
		}
	}
}));
app.set("view engine","hbs");
app.set("views","./server/views");
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended: true, limit:'50mb'}));
app.use('/',router);

app.listen(PORT,'0.0.0.0',()=>{
	console.log(`Server is running on http://localhost:${PORT}`);
})
