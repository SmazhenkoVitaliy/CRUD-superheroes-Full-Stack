const {Router} = require('express');
const SuperheroController = require('../controllers/superhero.controller');
const {validateSuperhero} = require('../middlewares/superhero.mw')





const superheroRouter = Router();

superheroRouter.post('/', validateSuperhero, SuperheroController.createSuperhero);


module.exports = superheroRouter;