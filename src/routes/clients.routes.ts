// import { Router } from "express";
// import ProductRepository from "../repositories/ProductsRepository";
// import CreateProductServise from "../services/CreateProductServise";

// const productRouter = Router();
// const productRepository = new ProductRepository()

// productRouter.get('/', (request, response) => {
//     response.json(productRepository.findAll())
// })

// productRouter.post('/', (request, response) => {
//     try {
//         //chama o createProduct que vai encaminahr os dados para o repositório
//         const service = new CreateProductServise(productRepository)
//         const { byPrice, code, description, lovers, sellPrice, tag, id } = request.body;
//         const protuto = service.execute({ byPrice, code, description, lovers, sellPrice, tag, id })
//         response.status(201).json(protuto)
//     } catch (error) {
//         return response.status(400).json({ error:"Produto já cadastrado" })
//     }
// })

// export default productRouter