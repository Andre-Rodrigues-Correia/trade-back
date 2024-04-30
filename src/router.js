import { Router} from "express";
import userRoutes from "./routes/userRoutes.js";
import tradeRoutes from "./routes/tradeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";

const router = Router();

router.use('/user', userRoutes);
router.use('/trade', tradeRoutes)
router.use('/auth', authRoutes)
router.use('/group', groupRoutes)
router.use('/subscription', subscriptionRoutes)

router.all('/*', (req, res) => {
    return res.status(404).json({
        message: 'Route not found!'
    })
})

export default router;