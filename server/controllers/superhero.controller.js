const {Superhero} = require('../models')


module.exports.createSuperhero = async(req,res,next) =>{
    try{
        const{body} = req;
        console.log(body)
        const createdSuperhero = await Superhero.create(body);
        return res.status(201).send(createdSuperhero);
    } catch(error) {
        next(error)
    }
}

module.exports.findAllSuperheroes = async(req, res, next) =>{
    try{
        const {pagination} = req;
        const superheroes = await Superhero.findAll({
            ...pagination
        });
        return res.status(200).send(superheroes)
    } catch(err) {
        next(err)
    }
}