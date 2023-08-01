const yup = require('yup');

module.exports.SUPERPOWER_SCHEMA = yup.object({
    superpowers: yup.string().required('power name is required').min(1),
    description: yup.string().min(1),
   
})