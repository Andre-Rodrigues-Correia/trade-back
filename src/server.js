import app from "./app.js";
import {connectDB} from "./database/connection.js";



app.listen(21184, async () => {
    console.log(process.env.SECRET)
    await connectDB();
})