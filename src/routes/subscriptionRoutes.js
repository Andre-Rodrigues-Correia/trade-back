import {Router} from "express";
import {
    createSubscription, deleteOneSubscription,
    getSubscribesForGroupId, updateOneSubscription,
    verifyUserAccessGroup
} from "../controllers/subscriptionController.js";
import {addUserInfos, verifyToken} from "../middlewares/authMiddlewares.js";

const subscriptionRoutes = Router();

subscriptionRoutes.post('/', addUserInfos, verifyToken, createSubscription);
subscriptionRoutes.get('/:id', addUserInfos, verifyToken, getSubscribesForGroupId);
subscriptionRoutes.get('/:group/:user', addUserInfos, verifyToken, verifyUserAccessGroup);
subscriptionRoutes.put('/:id', addUserInfos, verifyToken, updateOneSubscription);
subscriptionRoutes.delete('/:id', addUserInfos, verifyToken, deleteOneSubscription);

export default subscriptionRoutes;