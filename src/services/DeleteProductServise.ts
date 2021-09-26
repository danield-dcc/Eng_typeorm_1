import Product from "../models/Product";
import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";


export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
        const codeProduct = await getRepository(Product).findOne(req.params.code);
        if(!codeProduct){
            return res.status(400).json("Produto não encontrado!")
        }
        const resultado = await getRepository(Product).findOne(req.params.code)
        await getRepository(Product).delete(req.params.code);
        return res.status(200).json(resultado)
    } catch (e) {
        return res.status(400).json(e)
    }
}