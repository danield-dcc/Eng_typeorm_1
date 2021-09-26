import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../models/Product";


export const getProducts = async (req: Request, res: Response): Promise<Response> => {
   try {
      const products = await getRepository(Product).find();
      return res.status(200).json(products)
   } catch (e) {
      return res.status(400).json(e)
   }
}
