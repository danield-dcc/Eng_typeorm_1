import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router()
const productController = new ProductController()

productRouter
    .post("/", productController.create)
    .get("/", productController.list)
    .get("/:id", productController.getById)
    .delete("/:id", productController.delete)
    .put("/:id", productController.update)


    export default productRouter