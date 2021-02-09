const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
require('dotenv').config();
const db = process.env.mongoURI;

const conn = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log('mongoDB connected successfully');
	} catch (err) {
		console.error(err.message);
		// exit process with a failure
		process.exit(1);
	}
};

module.exports = conn;
