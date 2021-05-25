'use strict';

// All server code goes here
const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Files are being served on port: ${PORT}`);
});