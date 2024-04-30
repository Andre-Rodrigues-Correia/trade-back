import Subscription from "../models/Subscription.js";

async function save(subscription){
    return await Subscription.create(subscription);
}

async function findOne(filter) {
    return await Subscription.findOne(filter);
}

async function find(filter) {
    return await Subscription.find(filter);
}

async function updateOne(filter, subscription){
    return await Subscription.updateOne(filter, subscription);
}

async function deleteOne(filter){
    return await Subscription.deleteOne(filter);
}

async function verifyExistisSubscription(subscription){
    const filter = {
        $or: [
            {mail: subscription.mail},
            {phone: subscription.phone},
            {subscriptionname: subscription.subscriptionname}
        ]
    }

    return await Subscription.find(filter);
}

export {save, findOne, find, updateOne, deleteOne, verifyExistisSubscription}