const express = require('express');
const conn = require('./config/db');
const path = require('path');

const app = express();

// connect to database
conn();

// init middleware (inc bodyParser which allows data to be retrieved in req.body eg in user.js)
app.use(express.json({ extended: false }));

// test route - http://localhost:5000
// app.get('/', (req, res) => res.send('test route successful'));

// define routes
app.use('/api/items', require('./routes/api/items')); //localhost:5000/api/items
app.use('/api/auth', require('./routes/api/auth')); // http://localhost:5000/api/auth
app.use('/api/users', require('./routes/api/users')); // http://localhost:5000/api/users

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
