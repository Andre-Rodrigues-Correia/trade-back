import logger from "../utils/logger.js";
import {verifyExistisUser} from "../services/userService.js";


async function createuser(req, res)  {

    try {

        const existsUser = await verifyExistisUser(req.body);

        if(existsUser.length){
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        return res.status(201).json({
            message: 'User created with success'
        })

    }catch (error) {
        logger.error(`Error in user controller: ${error.message}`)
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

async function getOneUser(req, res){

}

async function getAllUsers(req, res){

}


async function updateOneUser(req, res){

}

async function deleteOneUser(req, res){

}

export { createuser, getOneUser, getAllUsers, updateOneUser, deleteOneUser }