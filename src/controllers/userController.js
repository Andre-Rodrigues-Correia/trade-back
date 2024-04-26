import logger from "../utils/logger.js";
import {find, findOne, save, verifyExistisUser} from "../services/userService.js";


async function createuser(req, res)  {

    try {

        const existsUser = await verifyExistisUser(req.body);

        console.log(existsUser.length)

        if(existsUser.length > 0){
            return res.status(400).json({
                message: 'userAlreadyExists',
                details: 'User already exists in database'
            })
        }

        await save(req.body)


        return res.status(201).json({
            message: 'userCreatedWithSuccess',
            details: 'User created with success'
        })

    }catch (error) {
        logger.error(`Error in user controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function getOneUser(req, res){
    const userId = req.params.id;

    const filter = {
        _id: userId
    }

    try {

        const user = await findOne(filter)

        if(!user){
            return res.status(404).json({
                message: 'notFoundUser',
                details: 'Not Found user with this id'
            });
        }

        return res.status(200).json({
            message: user
        })


    } catch (error) {
        logger.error(`Error in user controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function getAllUsers(req, res){

    try {

        const allUsers = await find();

        return res.status(201).json({
            message: allUsers,
        })

    }catch (error) {
        logger.error(`Error in user controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }

}


async function updateOneUser(req, res){

}

async function deleteOneUser(req, res){

}

export { createuser, getOneUser, getAllUsers, updateOneUser, deleteOneUser }