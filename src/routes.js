const express = require('express');
const routes = express.Router();
const auth = require("./midlewares/auth")
const app = require('./server');

routes.get('/', (req, res) => {
    res.status(200).send();
});

require('./midlewares/auth')(app);

module.exports = routes;