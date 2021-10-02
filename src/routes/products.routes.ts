import { Router } from "express";
import ProductRepository from "../repositories/ProductsRepository";
import { getProducts } from "../services/ListProductServise";
import { creatProduct } from "../services/NewCreateProductServise"
import { updateProduct} from "../services/UpdateProductService"
import { deleteProduct} from "../services/DeleteProductServise"

const productRouter = Router();



productRouter.get('/',getProducts);
productRouter.post('/', creatProduct);
productRouter.put('/update/:id', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);
 
export default productRouter