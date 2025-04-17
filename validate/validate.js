const Joi = require("joi");
const validateRequest=require("../middleware/validate_req")

// function login(req, res, next) {
//     const schema = Joi.object()
//         .keys({
//             // search: Joi.string().allow(null, '').required()
//             email: Joi.string().email().required(),
//             password: Joi.string().required()
//         });
//         validateRequest(req, res, next,schema)
   
// }



function edit_details(req, res, next) {
    const schema = Joi.object({
        id:Joi.required(),
        name: Joi.string()
            .required()
            .pattern(/\S/), 
        email: Joi.string()
            .required()
            .email() 
            .pattern(/\S/),
        mobile_no: Joi.string()
            .required().max(10)
            .message('Mobile number must be exactly 10 digits.')
    });

    validateRequest(req, res, next, schema);
}


module.exports = {
    edit_details
};
