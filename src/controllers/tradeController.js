import {deleteOne, find, findOne, save, updateOne} from "../services/tradeService.js";
import logger from "../utils/logger.js";



async function createTrade (req, res) {

    console.log(req.body)

    try {

        const newTrade = await save(req.body)

        res.status(201).json({
            message: 'tradeCreatedWithSuccess',
            details: 'Trade created with success'
        })

    } catch (error) {
        logger.error(`Error in trade controller: ${error.message}`)
        return res.status(500).json({
            message: 'InternalServerError',
            details: 'Internal server error'
        })
    }


}

async function getTradeById(req, res){
    const tradeId = req.params.id;

    const filter = {
        _id: tradeId
    }

    try {

        const trade = await findOne(filter);

        if(!trade){
            res.status(404).json({
                message: 'tradeNotFound',
                details: 'Trade not found with this id'
            })
        }

        return res.status(200).json({
            message: trade,
        });

    } catch (error) {
        logger.error(`Error in trade controller: ${error.message}`)
        return res.status(500).json({
            message: 'InternalServerError',
            details: 'Internal server error'
        })
    }

}


async function getGroupTradesById(req, res){
    const groupId = req.params.id;


    try {

        const groupTrades = await find();

        return res.status(200).json({
            message: groupTrades,
        });

    } catch (error) {
        logger.error(`Error in trade controller: ${error.message}`)
        return res.status(500).json({
            message: 'InternalServerError',
            details: 'Internal server error'
        })
    }

}


async function updateOneTrade(req, res){
    const id = req.params.id;

    const filter = {
        _id: id
    }

    try {

        const existTrade = await find(filter);

        if(!existTrade){
            return res.status(404).json({
                message: 'tradeNotFound',
                details: 'Trade not found'
            })
        }

        const updatedTrade = await updateOne(filter, req.body);

        return res.status(200).json({
            message: updatedTrade,
            details: 'Trade updated with success'
        })


    } catch (error) {
        logger.error(`Error in Trade controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function deleteOneTrade(req, res){
    const id = req.params.id;

    const filter = {
        _id: id
    }

    try {

        const existTrade = await find(filter);

        if(!existTrade){
            return res.status(404).json({
                message: 'subscriptionNotFound',
                details: 'Subscription not found'
            })
        }

        await deleteOne(filter, req.body);

        return res.status(200).json({
            message: 'Trade deleted with success',
        })


    } catch (error) {
        logger.error(`Error in Trade controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}


export { createTrade, getTradeById, getGroupTradesById, updateOneTrade, deleteOneTrade }


