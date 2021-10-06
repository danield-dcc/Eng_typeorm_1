import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const clientRouter = Router()
const clientController = new ClientController()

clientRouter
    .post("/", clientController.create)
    .get("/", clientController.list)
    .get("/", clientController.getById)
    .delete("/", clientController.delete)
    .put("/:id", clientController.update)


    export default clientRouter