import {Router} from "express";
import {
    createGroup,
    getAllGroups,
    getUserGroupsById,
    updateOneGroup,
    verifyUserIsOwnerGroup
} from "../controllers/groupController.js";

const groupRoutes = Router();

groupRoutes.post('/', createGroup);
groupRoutes.get('/', getAllGroups)
groupRoutes.get('/:id', getUserGroupsById);
groupRoutes.get('/:groupId/:userId', verifyUserIsOwnerGroup)
groupRoutes.put('/:id', updateOneGroup)

export default groupRoutes;