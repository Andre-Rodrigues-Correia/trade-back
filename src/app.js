import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from "./router.js";

dotenv.config();

const app = express()

app.use(
    express.json(),
    cors(),
    router
)

export default app;