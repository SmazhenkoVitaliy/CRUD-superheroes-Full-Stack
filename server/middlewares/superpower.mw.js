const {SUPERPOWER_SCHEMA} = require('../chemas/superpower.schema');
const {Superpower} = require('../models');


module.exports.validateSuperpower = async (req, res, next) =>{
    
    try{
        const validated = await SUPERPOWER_SCHEMA.validate(req.body);
        if(validated) {
            next()
        }
    } catch(err) {
        next(err);
    }
}