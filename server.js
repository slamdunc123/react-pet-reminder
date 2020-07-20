const express = require('express');
const conn = require('./config/db');

const app = express();

// connect to database
conn();

// init middleware (inc bodyParser which allows data to be retrieved in req.body eg in user.js)
app.use(express.json({ extended: false }));

// test route - http://localhost:5000
app.get('/', (req, res) => res.send('test route successful'));

// define routes
app.use('/api/items', require('./routes/api/items'));
//localhost:5000/api/items

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
