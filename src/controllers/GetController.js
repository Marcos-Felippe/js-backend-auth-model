const express = require('express');
const router = express.Router();
const authMidleware = require('../midlewares/auth');


//Passando a requisição para o midleware
router.use(authMidleware);

//Rota de pesquisa
router.get('/', async (req, res) => {
    try {
        const projects = [{
            id: "1",
            name: "Project nanobots",
        },{
            id: "2",
            name: "Project fusion reactor",
        }];

        return res.send(projects);
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error loading reminders' });
    }
});

//Rota de pesquisa por id
router.get('/:projects', async (req, res) => {
    return res.status(200).send();
});

module.exports = app => app.use('/projects', router);