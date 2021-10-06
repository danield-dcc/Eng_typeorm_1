import { Router } from "express";
import productRouter from './product.routes'
import clientRouter from './client.routes'
import clientHasProductRouter from './clientHasProduct.routes'

const routes = Router()

routes.use("/product", productRouter)
routes.use("/client", clientRouter)
routes.use("/purchase", clientHasProductRouter)

export default routes