import {Router} from "express";
import {signIn} from "../controllers/authController.js";

const authRoutes = Router();

authRoutes.post('/login', signIn);

export default authRoutes;