import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './util/dbConnect.js';
import electornicRoutes from './route/electronicRoutes.js'


dotenv.config()
const app = express();

app.use(express.json())

app.use('/electronic', electornicRoutes)

app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint Not Found' })
})


app.listen(process.env.PORT, (error) => {
    try {
        dbConnect();
        if (error) throw new Error(error);
        console.log(`Connected to Electornics Server ${process.env.PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})