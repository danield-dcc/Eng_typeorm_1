import { ProductRepository } from '../repositories/ProductRepository'
import { getCustomRepository } from "typeorm"

interface Request {
    code: number;
    description: string;
    byPrice: number;
    sellPrice: number;
    tag: string[];
    lovers: number;
}

export default class ProductService {

    async create({ code, description, byPrice, sellPrice, tag, lovers }: Request) {

        const productRepository = getCustomRepository(ProductRepository)

        const productAlreadyExists = await productRepository.findOne({
            code
        })

        if (productAlreadyExists) {
            lovers = productAlreadyExists.lovers;
        }

        const product = productRepository.create({
            code,
            description,
            byPrice,
            sellPrice,
            tag,
            lovers
        })

        await productRepository.save(product)
        return product
    }

    async list() {
        const productRepository = getCustomRepository(ProductRepository)

        const all = await productRepository.find()

        return all
    }

    async getById(id: string) {
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne(id)

        if (!product) {
            throw new Error('Produto não encontrado!')
        }

        return product
    }

    async delete(id: string) {
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne(id)

        if (!product) {
            throw new Error('Produto não encontrado!')
        }

        const deleted = await productRepository.delete(id)

        return deleted
    }

    async update(id: string, { code, description, byPrice, sellPrice, tag, lovers }: Request){
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne(id)

        if (!product) {
            throw new Error('Produto não encontrado!')
        } 

        await productRepository.update(id, {
            code,
            description,
            byPrice,
            sellPrice,
            tag,
            lovers
        })

        const productUpdate = await productRepository.findOne(id)

        return productUpdate
    }

}


