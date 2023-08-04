const {Router} = require('express');
const SuperheroController = require('../controllers/superhero.controller');
const {validateSuperhero, getSuperheroInstance} = require('../middlewares/superhero.mw');
const pagination = require('../middlewares/pagination.mw');
const {upload} = require('../middlewares/uploadImage.mw');
const{getSuperpowers} = require('../middlewares/superpower.mw')





const superheroRouter = Router();

superheroRouter.post('/', validateSuperhero,upload,getSuperpowers, SuperheroController.createSuperhero);
superheroRouter.get('/', pagination, SuperheroController.findAllSuperheroes);
superheroRouter.get('/:superheroId',getSuperheroInstance, SuperheroController.findOneSuperhero);
superheroRouter.delete('/:superheroId', SuperheroController.deleteOneSuperhero);
superheroRouter.put('/:superheroId', getSuperheroInstance,upload, SuperheroController.updateSuperhero);
superheroRouter.post('/:superheroId', upload, SuperheroController.addImage)


module.exports = superheroRouter;