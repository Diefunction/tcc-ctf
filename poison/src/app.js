const express = require('express');
const error = require('./middlewares/error');

const services = require("./routes/services");
const date = require('./routes/date');

const app = express();

app.use(express.json());

app.use("/api/tcc/", services);
app.use("/api/", date);

app.use(error);

app.listen(80, () => { console.log("Connection opened on port 80"); });