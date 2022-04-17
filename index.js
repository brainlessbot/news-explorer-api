require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { DB_HOST, DB_NAME, PORT = 3000 } = process.env;

const app = express();

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`);

app.listen(PORT);
