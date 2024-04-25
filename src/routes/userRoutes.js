import {Router} from "express";
import {createuser, getOneUser, getAllUsers, updateOneUser, deleteOneUser} from "../controllers/userController.js";
import {userValidator} from "../middlewares/userMiddleware.js";
import {encryptPasswordMiddleware} from "../middlewares/passwordMiddleware.js";

const userRoutes = Router();

userRoutes.post('/', userValidator, encryptPasswordMiddleware, createuser);
userRoutes.get('/', getAllUsers)
userRoutes.get('/:id', getOneUser)

export default userRoutes;