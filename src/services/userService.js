import User from "../models/User.js";

async function save(user){
    return await User.create(user);
}

async function findOne(filter) {
    return await User.findOne(filter);
}

async function find(filter) {
    return await User.find(filter).select('-password -cpf -phone');
}

async function updateOne(filter, user){
    return await User.updateOne(filter, user);
}

async function deleteOne(filter){
    return await User.deleteOne(filter);
}

async function verifyExistisUser(user){
    const filter = {
        $or: [
            {mail: user.mail},
            {phone: user.phone},
            {username: user.username}
        ]
    }

    return await User.find(filter);
}

export {save, findOne, find, updateOne, deleteOne, verifyExistisUser}