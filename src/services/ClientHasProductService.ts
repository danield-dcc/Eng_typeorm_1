import { getCustomRepository } from 'typeorm';
import { ClientHasProductRepository } from '../repositories/ClientHasProductRepository';

import Client from '../models/Client';
import Product from '../models/Product';

interface Request {
    clientId: Client;
    productId: Product;
    value: number;
}

export default class ClientService {
    async create({ clientId, productId, value }: Request) {
        const clientHasProductRepository = getCustomRepository(ClientHasProductRepository);


        const clientHasProduct = clientHasProductRepository.create({
            clientId,
            productId,
            value
        });

        await clientHasProductRepository.save(clientHasProduct);
        return clientHasProduct;
    }

    async list() {
        const clientHasProductRepository = getCustomRepository(ClientHasProductRepository);

        const all = await clientHasProductRepository.find();

        return all;
    }

    async getById(id: string) {
        const clientHasProductRepository = getCustomRepository(ClientHasProductRepository);

        const clientHasProduct = await clientHasProductRepository.findOne(id);

        if (!clientHasProduct) {
            throw new Error('Compra não encontrada!');
        }

        return clientHasProduct;
    }

    async delete(id: string) {
        const clientHasProductRepository = getCustomRepository(ClientHasProductRepository);

        const clientHasProduct = await clientHasProductRepository.findOne(id);

        if (!clientHasProduct) {
            throw new Error('Compra não encontrada!');
        }

        const deleted = await clientHasProductRepository.delete(id);

        return deleted;
    }

    async Update(
        id: string,
        { clientId, productId, value }: Request,
    ) {
        const clientHasProductRepository = getCustomRepository(ClientHasProductRepository);

        const client = await clientHasProductRepository.findOne(id);

        if (!client) {
            throw new Error('Cliente não encontrado!');
        }

        await clientHasProductRepository.update(id, {
            clientId,
            productId,
            value
        });

        const clientHasProductUpdate = await clientHasProductRepository.findOne(id);

        return clientHasProductUpdate;
    }
}