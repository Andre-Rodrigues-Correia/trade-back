import {Router} from "express";
import {
    createGroup,
    getAllGroups, getOneGroupById,
    getUserGroupsById,
    updateOneGroup,
    verifyUserIsOwnerGroup
} from "../controllers/groupController.js";
import {addUserInfos, verifyToken} from "../middlewares/authMiddlewares.js";

const groupRoutes = Router();

groupRoutes.post('/', createGroup);
groupRoutes.get('/', addUserInfos, verifyToken, getAllGroups)
groupRoutes.get('/:id', addUserInfos, verifyToken, getUserGroupsById);
groupRoutes.get('/:id/group', addUserInfos, verifyToken, getOneGroupById);
groupRoutes.get('/:groupId/:userId', addUserInfos, verifyToken, verifyUserIsOwnerGroup)
groupRoutes.put('/:id', addUserInfos, verifyToken, updateOneGroup)

export default groupRoutes;