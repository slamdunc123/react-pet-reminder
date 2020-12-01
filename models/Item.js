const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
});

module.exports = Item = mongoose.model('item', ItemSchema);
