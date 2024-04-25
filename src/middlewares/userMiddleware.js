import {validateBirthday} from "../utils/validators.js";

function userValidator(req, res, next){

    const {name, mail, phone, username, password, birthday} = req.body;


    if(!name){
        return res.status(400).json({
            message: 'nameIsRequired',
            details: 'Attribute name is required for create a new user'
        })
    }

    if(!mail){
        return res.status(400).json({
            message: 'mailIsRequired',
            details: 'Attribute mail is required for create a new user'
        })
    }

    if(!phone){
        return res.status(400).json({
            message: 'phoneIsRequired',
            details: 'Attribute phone is required for create a new user'
        })
    }

    if(!username){
        return res.status(400).json({
            message: 'usernameIsRequired',
            details: 'Attribute username is required for create a new user'
        })
    }

    if(!password){
        return res.status(400).json({
            message: 'passwordIsRequired',
            details: 'Attribute password is required for create a new user'
        })
    }
    
    if(!birthday){
        return res.status(400).json({
            message: 'birthdayIsRequired',
            details: 'Attribute birthday is required for create a new user'
        })
    }

    if(!validateBirthday(birthday)){
        return res.status(400).json({
            message: 'mustBeOfLegalAge',
            details: 'The user must be of legal age to be created'
        })
    }



    next()

}

export {userValidator}