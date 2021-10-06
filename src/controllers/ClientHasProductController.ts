import { Request, Response } from 'express';

import ClientHasProductService from '../services/ClientService';

const clientHasProductService = new ClientHasProductService();

export default class ClientController {
  async create(req: Request, res: Response) {
    try {
      const clientHasProduct = await clientHasProductService.create(req.body);
      return res.status(201).json(clientHasProduct);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async list(req: Request, res: Response) {
    try {
      const listAll = await clientHasProductService.list();
      return res.status(200).json(listAll);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const clientHasProduct = await clientHasProductService.getById(req.params.id);
      return res.status(200).json(clientHasProduct);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await clientHasProductService.delete(req.params.id);
      return res.status(200).json('Compra excluida com sucesso!');
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const clientHasProduct = await clientHasProductService.Update(req.params.id, req.body);
      return res.status(200).json(clientHasProduct);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}