
import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import Router from 'express'
import productRouter from './products.routes'




createConnection();
const routes = Router()


routes.use('/products', productRouter)

export default routes

