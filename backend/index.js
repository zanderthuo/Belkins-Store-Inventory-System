import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import adminRouter from './routes/admin.js'
import inventoryManagerRouter from './routes/inventoryManager.js'
import itemRouter from './routes/item.js'
import cors from 'cors'

const app = express();
dotenv.config()

// connection to mongodb database
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to mongo db')
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected')
})

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected')
})
const port = process.env.port;

// MIDDLEWARE
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api/admin', adminRouter)
app.use('/api/inventory-manager', inventoryManagerRouter)
app.use('/api/item', itemRouter)

app.listen(port, () => {
    connect();
    console.log(`Connected to backend server on port number ${port}`);
})