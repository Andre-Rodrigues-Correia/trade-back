import Group from "../models/Group.js";

async function save(group){
    return await Group.create(group);
}

async function findOne(filter) {
    return await Group.findOne(filter);
}

async function find(filter) {
    return await Group.find(filter).select('-password -cpf -phone');
}

async function updateOne(filter, group){
    return await Group.updateOne(filter, group);
}

async function deleteOne(filter){
    return await Group.deleteOne(filter);
}

async function verifyExistisGroup(group){
    const filter = {
        $or: [
            {mail: group.mail},
            {phone: group.phone},
            {groupname: group.groupname}
        ]
    }

    return await Group.find(filter);
}

export {save, findOne, find, updateOne, deleteOne, verifyExistisGroup}