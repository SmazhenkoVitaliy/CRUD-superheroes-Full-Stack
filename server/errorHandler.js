const yup = require('yup');
const SuperheroError = require('./errors/superhero.error');

module.exports.errorHandler = async(err,req,res,next) =>{
    if(err instanceof yup.ValidationError) {
      return  res.status(400).send(err.message);
    }

    if(err instanceof SuperheroError) {
      return res.status(404).send(err.message);
    }

    // if(err instanceof GroupError) {
    //   return res.status(404).send(err.message);
    // }


    return res.status(500).send(err.message)
}