import { Router } from "express";
import ProductRepository from "../repositories/ProductsRepository";
import { getProducts } from "../services/ListProductServise";
import { creatProduct } from "../services/NewCreateProductServise"
import { updateProduct} from "../services/UpdateProductService"
import { deleteProduct} from "../services/DeleteProductServise"

const productRouter = Router();



productRouter.get('/',getProducts);
productRouter.post('/', creatProduct);
productRouter.put('/update/:code', updateProduct);
productRouter.delete('/delete/:code', deleteProduct);
 
export default productRouter