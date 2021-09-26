import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../models/Product";

export const creatProduct = async (req: Request, res: Response): Promise<Response> => {
   try {
      const newProduct = getRepository(Product).create(req.body);
      const resultado = await getRepository(Product).save(newProduct)
      return res.status(200).json(resultado)
   } catch (e) {
      return res.status(400).json(e)
   }
}


