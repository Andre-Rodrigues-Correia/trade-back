import Trade from "../models/Trade.js";

async function save(trade){
    return await Trade.create(trade);
}

async function findOne(filter) {
    return await Trade.findOne(filter);
}

async function find(filter) {
    return await Trade.find(filter);
}

async function updateOne(filter, trade){
    return await Trade.updateOne(filter, trade);
}

async function deleteOne(filter){
    return await Trade.deleteOne(filter);
}


export {save, findOne, find, updateOne, deleteOne}