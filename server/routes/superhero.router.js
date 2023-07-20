const {Router} = require('express');
const SuperheroController = require('../controllers/superhero.controller');
const {validateSuperhero, getSuperheroInstance} = require('../middlewares/superhero.mw');
const pagination = require('../middlewares/pagination.mw')





const superheroRouter = Router();

superheroRouter.post('/', validateSuperhero, SuperheroController.createSuperhero);
superheroRouter.get('/', pagination, SuperheroController.findAllSuperheroes);
superheroRouter.get('/:superheroId',getSuperheroInstance, SuperheroController.findOneSuperhero)
superheroRouter.delete('/:superheroId', SuperheroController.deleteOneSuperhero)


module.exports = superheroRouter;