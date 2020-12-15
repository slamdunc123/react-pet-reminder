const express = require('express');
const router = express.Router();
const Reminder = require('../../models/Reminder');

// @router  GET api/reminders - http://localhost:5000/api/reminders
// @desc    reminders test route
// @access  Public
// router.get('/', (req, res) => res.send('reminders test route'));

// @router  GET api/reminders - http://localhost:5000/api/reminders
// @desc    Get all reminders
// @access  Public

router.get('/', async (req, res) => {
	try {
		const reminders = await Reminder.find();
		res.json(reminders);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route POST api/reminders
// @desc Create a reminder
// @access Public

router.post('/', async (req, res) => {
	console.log('req.body', req.body);
	const { name, date } = req.body;
	try {
		// check if reminder name already exists
		// let reminder = await Reminder.findOne({
		// 	name: name,
		// });
		// if (reminder) {
		// 	return res.status(400).json({
		// 		errors: [{ msg: 'Reminder already exists' }],
		// 	});
		// }

		const newReminder = new Reminder({
			name: req.body.name,
			date: req.body.date,
		});
		console.log('newReminder', newReminder);
		// save item to database
		reminder = await newReminder.save();
		res.json({ reminder: reminder, msg: 'Reminder created' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route DELETE api/reminders
// @desc Delete an reminder
// @access Public

router.delete('/:id', async (req, res) => {
	try {
		// check if reminder exists
		const reminder = await Reminder.findById(req.params.id);

		// if id is a valid format but doesn't exist in database
		if (!reminder) {
			return res.status(404).json({
				msg: 'Reminder not found',
			});
		}

		await reminder.remove();

		res.json({
			msg: 'reminder deleted successfully.',
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route UPDATE api/reminders
// @desc Update an reminder
// @access Public

router.put('/:id', async (req, res) => {
	try {
		// check if reminder exists
		let reminder = await Reminder.findById(req.params.id);

		// if id is a valid format but doesn't exist in database
		if (!reminder) {
			return res.status(404).json({
				msg: 'Reminder not found',
			});
		}
		reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body);
		await res.json({
			msg: 'Reminder updated successfully.',
			reminder: reminder,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
