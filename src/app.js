import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {router as bookRoutes } from './routes/book.routes.js'


dotenv.config();

// usam,os express para los middleware
const app = express();
app.use(bodyParser.json())  // parseador de body

// conectar a la BD
mongoose.connect(
    process.env.MONGO_URL,
    {
        dbName: process.env.MONGO_DB_NAME
    }
)
const db = mongoose.connection

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
});
