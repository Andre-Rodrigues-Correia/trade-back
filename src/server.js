import app from "./app.js";
import {connectDB} from "./database/connection.js";



app.listen(21187, async () => {
    await connectDB();
})