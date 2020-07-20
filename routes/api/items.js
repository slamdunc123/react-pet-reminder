const express = require('express');
const router = express.Router();
const config = require('config');
const Item = require('../../models/Item');

// @router  GET api/items - http://localhost:5000/api/items
// @desc    Items test route
// @access  Public
// router.get('/', (req, res) => res.send('items test route'));

// @router  GET api/items - http://localhost:5000/api/items
// @desc    Get all items
// @access  Public
router.get('/', async (req, res) => {
	try {
		const items = await Item.find();
		res.json(items);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route POST api/items
// @desc Create an item
// @access Public

router.post('/', async (req, res) => {
	const { name, desc } = req.body;
	try {
		// check if item naem already exists
		let item = await Item.findOne({
			name: name,
		});
		if (item) {
			return res.status(400).json({
				errors: [{ msg: 'Item already exists' }],
			});
		}

		const newItem = new Item({
			name: req.body.name,
			desc: req.body.desc,
		});
		// save item to database
		item = await newItem.save();
		res.json(item);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route DELETE api/items
// @desc Delete an item
// @access Public

router.delete('/:id', async (req, res) => {
	try {
		// check if item exists
		const item = await Item.findById(req.params.id);

		// if id is a valid format but doesn't exist in database
		if (!item) {
			return res.status(404).json({
				msg: 'Item not found',
			});
		}

		await item.remove();

		res.json({
			msg: 'Item deleted',
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route UPDATE api/items
// @desc Update an item
// @access Public

router.put('/:id', async (req, res) => {
	try {
		// check if item exists
		let item = await Item.findById(req.params.id);

		// if id is a valid format but doesn't exist in database
		if (!item) {
			return res.status(404).json({
				msg: 'Item not found',
			});
		}
		item = await Item.findByIdAndUpdate(req.params.id, req.body);
		res.json({
			msg: 'Item updated',
			item: item,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
