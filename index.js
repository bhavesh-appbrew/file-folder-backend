const express = require('express');
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/', router);

app.listen(8080);