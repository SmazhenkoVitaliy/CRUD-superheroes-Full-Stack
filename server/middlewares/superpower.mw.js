const {SUPERPOWER_SCHEMA} = require('../schemas/superpower.schema');
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

module.exports.getSuperpowers = async(req,res,next) =>{
    try{
        const{body:{superpowers}} = req;
        if( superpowers && superpowers.length > 0 ) {
           const superpowersArray = [];
           for(power of superpowers) {
            superpowersArray.push(await Superpower.findOrCreate({
                where:{
                    powerName: power
                }
            }))
           }
           req.superpowersArray = superpowersArray;
          next();
        } else{
           next(); 
        }
    } catch(error) {
        next(error)
    }
}