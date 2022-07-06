const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = express.Router();
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

routes.get('/', (req, res) => {
    res.status(200).send();
});

require('./controllers/AuthController')(app);
require('./controllers/GetController')(app);

app.listen(3300, () => {
    console.log('Sever is running in port 3300');
});