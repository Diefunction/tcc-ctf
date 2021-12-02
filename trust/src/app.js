const express = require('express');
const error = require('./middlewares/error');

const users = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/api/user/', users);

app.use(error);

app.listen(80, () => { console.log('connection opened on port 80'); });