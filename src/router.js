import { Router} from "express";
import userRoutes from "./routes/userRoutes.js";

const router = Router();

router.use('/user', userRoutes);

router.all('/*', (req, res) => {
    return res.status(404).json({
        message: 'Route not found!'
    })
})

export default router;