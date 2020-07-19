const express = require('express');

const app = express();

// test route - http://localhost:5000
app.get('/', (req, res) => res.send('test route successful'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
