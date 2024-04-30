import logger from "../utils/logger.js";
import {save, find, updateOne, deleteOne, findOne} from "../services/subscriptionService.js";


async function createSubscription(req, res){


    try {

        const newSubscription = await save(req.body);

        return res.status(201).json({
            message: 'subscriptionCreatedWithSuccess',
            details: 'Subscription created with success'
        })


    }catch (error) {
        logger.error(`Error in subscription controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function getSubscribesForGroupId(req, res){
    const id = req.params.id;

    try {

        const groupSubscriptions = await find({
            groupId: id
        })

        console.log(groupSubscriptions)

        // if(userSubscriptions.length <= 0){
        //     res.status(404).json({
        //         message: 'notFoundSubscription',
        //         details: 'Not found subscription with this user and group'
        //     })
        // }

        return res.status(200).json({
            message: groupSubscriptions
        })

    }catch (error) {
        logger.error(`Error in subscription controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function verifyUserAccessGroup(req, res){
    const {group, user} = req.params;

    console.log(group);
    console.log(user);

    try {

        const userSubscriptions = await findOne({
            groupId:group,
            userId: user
        })

        console.log(userSubscriptions)

        return res.status(200).json({
            message: userSubscriptions
        })


    }catch (error) {
        logger.error(`Error in subscription controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}


async function updateOneSubscription(req, res){
    const id = req.params.id;

    const filter = {
        _id: id
    }

    try {

        const existSubscription = await find(filter);

        if(!existSubscription){
            return res.status(404).json({
                message: 'subscriptionNotFound',
                details: 'Subscription not found'
            })
        }

        const updatedSubscription = await updateOne(filter, req.body);

        return res.status(200).json({
            message: updatedSubscription,
            details: 'Subscription updated with success'
        })


    } catch (error) {
        logger.error(`Error in subscription controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function deleteOneSubscription(req, res){
    const id = req.params.id;

    const filter = {
        _id: id
    }

    try {

        const existSubscription = await find(filter);

        if(!existSubscription){
            return res.status(404).json({
                message: 'subscriptionNotFound',
                details: 'Subscription not found'
            })
        }

        await deleteOne(filter, req.body);

        return res.status(200).json({
            message: 'Subscription deleted with success',
        })


    } catch (error) {
        logger.error(`Error in subscription controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

export { createSubscription, getSubscribesForGroupId, updateOneSubscription, deleteOneSubscription, verifyUserAccessGroup }