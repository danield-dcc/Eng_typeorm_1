import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../models/Product";


export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
        const productCode = await getRepository(Product).findOne(req.params.id)
        if(!productCode){
            return res.status(400).json("Produto não encontrado!")
        }
       const newProduct = getRepository(Product).update(req.params.id, 
        req.body
       );
      
       const resultado = await getRepository(Product).findOne(req.params.id)
       return res.status(200).json(resultado)
    } catch (e) {
       return res.status(400).json(e)
    }
 } 