import {deleteOne, find, findOne, save, updateOne} from "../services/tradeService.js";
import {findOne as findOneGroup} from '../services/groupService.js'
import logger from "../utils/logger.js";



async function createTrade (req, res) {

    console.log('aqui');
    console.log(req.body);
    console.log(req.user);

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
        const group = await findOneGroup({_id: req.body.groupId});

        if(!group){
            return res.status(404).json({
                message: 'groupNotFound',
                details: 'Group not found'
            })
        }

        if(!(group.ownerId == req.user._id)){
            return res.status(404).json({
                message: 'unauthorized',
                details: 'Dont permission for this content'
            })
        }

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


        const existTrade = await findOne(filter);



        console.log(existTrade)

        if(!existTrade){
            return res.status(404).json({
                message: 'subscriptionNotFound',
                details: 'Subscription not found'
            })
        }

        const group = await findOneGroup({_id: existTrade.groupId});

        if(!group){
            return res.status(404).json({
                message: 'groupNotFound',
                details: 'Group not found'
            })
        }

        if(!(group.ownerId == req.user._id)){
            return res.status(404).json({
                message: 'unauthorized',
                details: 'Dont permission for this content'
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


