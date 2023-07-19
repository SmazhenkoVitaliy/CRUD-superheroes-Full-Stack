const {Router} = require('express');
const superheroRouter  = require('./superhero.router');


const router = Router();

router.use('/superheroes', superheroRouter),













module.exports = router;