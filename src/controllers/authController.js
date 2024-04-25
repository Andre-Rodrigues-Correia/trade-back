import 'dotenv/config.js'
import logger from "../utils/logger.js";
import bcrypt from "bcrypt";
import {findOne} from "../services/userService.js";
import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET;

async function signIn(req, res){

    const {mail, password} = req.body;

    const filter = {
        mail: mail
    }

    console.log(req.body)

    try {

        const user = await findOne(filter)

        console.log(user)

        if(!user) {
            return res.status(404).json({
                message: 'userNotFound',
                details: 'User not found'
            })
        }

        if(!bcrypt.compareSync(password, user.password)){
            return res.status(404).json({
                message: 'mailOrPasswordIncorrect',
                details: 'Mail or password incorrect'
            })
        }

        const userInfos = {
            _id: user._id,
            name: user.name,
            mail: user.mail,
            username: user.username,
            //phone: user.phone
        }

        const token = jwt.sign(userInfos, SECRET, {expiresIn: '48h'});

        return res.status(200).json({
            message: token
        })

    } catch (error) {
        logger.error(`Error in auth controller: ${error.message}`)
        return res.status(500).json({
            message: 'InternalServerError',
            details: 'Internal server error'
        })
    }

}

export { signIn }