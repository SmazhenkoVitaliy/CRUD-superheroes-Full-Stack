const {Router} = require('express');
const SuperheroController = require('../controllers/superhero.controller');
const {validateSuperhero} = require('../middlewares/superhero.mw');
const pagination = require('../middlewares/pagination.mw')





const superheroRouter = Router();

superheroRouter.post('/', validateSuperhero, SuperheroController.createSuperhero);
superheroRouter.get('/', pagination, SuperheroController.findAllSuperheroes)


module.exports = superheroRouter;