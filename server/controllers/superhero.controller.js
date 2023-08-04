const {Superhero, Image} = require('../models');
const SuperheroError = require('../errors/superhero.error');


module.exports.createSuperhero = async(req,res,next) =>{
    try{
        const{body} = req;
        const createdSuperhero = await Superhero.create(body);
        if(req.file){
            const updatedSuperhero = await Image.create({
                imagePath: req.file.filename,
                superheroId: createdSuperhero.id,
                returning:true
            });
            return res.status(201).send(updatedSuperhero);
        }
        return res.status(201).send({data:createdSuperhero});
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
        return res.status(200).send({data:superheroes})
    } catch(error) {
        next(error)
    }
}

module.exports.findOneSuperhero = async(req, res, next) =>{
    try{
        const{superheroInstance} = req;
        return res.status(200).send({data:superheroInstance});
    } catch(error) {
        next(error)
    }
}

module.exports.deleteOneSuperhero = async(req, res, next) =>{
    try{
        const{params:{superheroId}} = req;
        const rowCounts = await Superhero.destroy({
            where:{
                id:superheroId
            }
        });
        if(rowCounts) {
            return res.status(200).send({data:`Superhero deleted`})
        } else{
            throw new SuperheroError('Superhero not found!');
        }
        
    } catch(error) {
        next(error)
    }
}

module.exports.updateSuperhero = async(req, res, next) =>{
    try{
        const{superheroInstance, body} = req;
        const updatedSuperhero = await superheroInstance.update(body);
        if(req.file){
            const superheroWithImage = await Image.create({
                imagePath: req.file.filename,
                superheroId: updatedSuperhero.id,
                returning:true
            });
            return res.status(200).send({data:superheroWithImage});
        }
        return res.status(200).send({data:updatedSuperhero});
    } catch(error) {
        next(error)
    }
}

module.exports.addImage = async(req,res,next) =>{
    try{
        const{params:{superheroId}, file:{filename}} = req;
        const updatedSuperhero = await Image.create({
            imagePath: filename,
            superheroId,
            returning:true
        });
        return res.status(200).send({data:updatedSuperhero});
    } catch(error) {
        next(error)
    }
}