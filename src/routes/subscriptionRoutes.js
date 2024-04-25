import {Router} from "express";
import {
    createSubscription, deleteOneSubscription,
    getSubscribesForGroupId, updateOneSubscription,
    verifyUserAccessGroup
} from "../controllers/subscriptionController.js";

const subscriptionRoutes = Router();

subscriptionRoutes.post('/', createSubscription);
subscriptionRoutes.get('/:id', getSubscribesForGroupId);
subscriptionRoutes.get('/:group/:user', verifyUserAccessGroup);
subscriptionRoutes.put('/:id', updateOneSubscription);
subscriptionRoutes.delete('/:id', deleteOneSubscription);

export default subscriptionRoutes;