import {Router} from "express";
import {
    createTrade,
    deleteOneTrade,
    getGroupTradesById,
    getTradeById,
    updateOneTrade
} from "../controllers/tradeController.js";
import {addUserInfos, verifyToken} from "../middlewares/authMiddlewares.js";

const tradeRoutes = Router();

tradeRoutes.post('/', addUserInfos, verifyToken, createTrade);
tradeRoutes.get('/:id', addUserInfos, verifyToken, getTradeById);
tradeRoutes.get('/:id/group', addUserInfos, verifyToken, getGroupTradesById);
tradeRoutes.put('/:id', addUserInfos, verifyToken, updateOneTrade);
tradeRoutes.delete('/:id', addUserInfos, verifyToken, deleteOneTrade);

export default tradeRoutes;