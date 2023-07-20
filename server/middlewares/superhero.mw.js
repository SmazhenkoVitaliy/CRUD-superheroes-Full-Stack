const {Superhero} = require('../models')
const {SUPERHERO_SCHEMA} = require('../schemas/superhero.schema');
const SuperheroError = require('../errors/superhero.error')




module.exports.getSuperheroInstance = async(req, res, next) =>{
    try{
        const {params:{superheroId}} = req;
        const superhero = await Superhero.findByPk(superheroId);
        if(!superhero) {
            throw new SuperheroError('Superhero not found!');
        }
        req.superheroInstance = superhero;
        next();
    } catch(err) {
        next(err)
    }
}


module.exports.validateSuperhero = async(req, res, next) =>{
    try{
     const{body} = req;
    const validated = await SUPERHERO_SCHEMA.validate(body);
    if(validated) {
     next();
    }
    } catch(err) {
     next(err)
    } 
 }
 