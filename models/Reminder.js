const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

module.exports = Reminder = mongoose.model('reminder', ReminderSchema);
