import {Router} from "express";
import {createuser, getOneUser, getAllUsers, updateOneUser, deleteOneUser} from "../controllers/userController.js";
import {userValidator} from "../middlewares/userMiddleware.js";
import {encryptPasswordMiddleware} from "../middlewares/passwordMiddleware.js";
import {addUserInfos, verifyToken} from "../middlewares/authMiddlewares.js";

const userRoutes = Router();

userRoutes.post('/', userValidator, encryptPasswordMiddleware, createuser);
userRoutes.get('/', addUserInfos, verifyToken, getAllUsers)
userRoutes.get('/:id', addUserInfos, verifyToken, getOneUser)
userRoutes.put('/:id', addUserInfos, verifyToken, updateOneUser)

export default userRoutes;