import {encryptPassword} from "../utils/password.js";

async function encryptPasswordMiddleware (req, res, next){
    req.body.password = await encryptPassword(req.body.password);

    next();
}

export { encryptPasswordMiddleware }