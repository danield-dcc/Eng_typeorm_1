import { Router } from "express";
import clientRouter from './client.routes'



createConnection();
const routes = Router()

routes.use("/client", clientRouter)

export default routes

