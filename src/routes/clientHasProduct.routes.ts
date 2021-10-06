import { Router } from 'express';
import ClientHasProductController from '../controllers/ClientHasProductController';

const clientHasProductRouter = Router()
const clientHasProductController = new ClientHasProductController()

clientHasProductRouter
    .post("/", clientHasProductController.create)
    .get("/", clientHasProductController.list)
    .get("/", clientHasProductController.getById)
    .delete("/", clientHasProductController.delete)
    .put("/:id", clientHasProductController.update)


    export default clientHasProductRouter