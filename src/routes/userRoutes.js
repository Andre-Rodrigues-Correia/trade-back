import {Router} from "express";
import {createuser, getOneUser, getAllUsers, updateOneUser, deleteOneUser} from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.post('/', createuser);

export default userRoutes;