import {Router} from "express";
import {
    createTrade,
    deleteOneTrade,
    getGroupTradesById,
    getTradeById,
    updateOneTrade
} from "../controllers/tradeController.js";

const tradeRoutes = Router();

tradeRoutes.post('/', createTrade);
tradeRoutes.get('/:id', getTradeById);
tradeRoutes.get('/:id/group', getGroupTradesById);
tradeRoutes.put('/:id', updateOneTrade);
tradeRoutes.delete('/:id', deleteOneTrade);

export default tradeRoutes;