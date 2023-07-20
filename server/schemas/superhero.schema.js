const yup = require('yup');



module.exports.SUPERHERO_SCHEMA = yup.object({
    nickName:yup.string().required('Nick Name  is required').min(2).max(40),
    realName:yup.string().required('Real Name is required').min(2).max(40),
    originDescription:yup.string().required('Origin Description is required').min(2),
    cathPhrase:yup.string().required('Cath Phrase is required').min(2),
})