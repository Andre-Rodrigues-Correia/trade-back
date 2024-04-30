import {find, findOne, save, updateOne} from "../services/groupService.js";
import logger from "../utils/logger.js";

async function createGroup(req, res){

    try{

        console.log(req.body)

        const newGroup = await save(req.body);

        console.log(newGroup)

        return res.status(201).json({
            message: 'groupCreatedWithSuccess',
            details: 'Group created with success'
        })

    }catch (error) {
        logger.error(`Error in group controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function getUserGroupsById(req, res){
    const userId = req.params.id

    const filter = {
        ownerId: userId
    }

    try {

        const groups = await find(filter);

        console.log(groups);

        return res.status(200).json({
            message: groups
        });

    } catch (error) {
        logger.error(`Error in group controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function getOneGroupById(req, res){
    const groupId = req.params.id

    const filter = {
        _id: groupId
    }

    try {

        const group = await findOne(filter);

        console.log(group);

        return res.status(200).json({
            message: group
        });

    } catch (error) {
        logger.error(`Error in group controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function getAllGroups(req, res){

    try {

        const groups = await find();

        console.log(groups);

        return res.status(200).json({
            message: groups
        });

    } catch (error) {
        logger.error(`Error in group controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function verifyUserIsOwnerGroup(req, res){
    const {groupId, userId} = req.params;


    let response = {
        isOwner: false
    }

    const filter = {
        _id: groupId
    }

    try {

        const group = await findOne(filter);


        if(group.ownerId == userId){
            response.isOwner = true;
        }

        return res.status(200).json({
            message: response
        })

    } catch (error) {
        logger.error(`Error in group controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

async function updateOneGroup(req, res){
    const id = req.params.id;

    const filter = {
        _id: id
    }

    try {

        const existGroup = await find(filter);

        if(!existGroup){
            return res.status(404).json({
                message: 'tradeNotFound',
                details: 'Trade not found'
            })
        }

        const updatedGroup = await updateOne(filter, req.body);

        return res.status(200).json({
            message: updatedGroup,
            details: 'Trade updated with success'
        })


    } catch (error) {
        logger.error(`Error in Trade controller: ${error.message}`)
        res.status(500).json({
            message: 'internalServerError'
        });
    }
}

export { createGroup, getUserGroupsById, getOneGroupById, updateOneGroup, verifyUserIsOwnerGroup, getAllGroups }