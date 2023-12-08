const mongoose = require('mongoose');
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true
};
const database = {
	conn: null,
	connect: function(){
		mongoose.connect(process.env.MONGODB_URI, options);
		conn = mongoose.connection;
		console.log(`MongoDB connected on: ${process.env.MONGODB_URI}`);
	},

}
module.exports = database;
