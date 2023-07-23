import { Request, Response } from "express";
import market from "./database";
import Products from "./interfaces";

const createProduct = (req: Request, res: Response): Response => {
    const newProduct: Products = {
        id: Number(Date.now()),
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        section: req.body.section,
        calories: req.body.calories,
        expirationDate:  new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)       
    }

    market.push(newProduct);
    return res.status(201).json(newProduct);
};

const listProducts = (req: Request, res: Response): Response => {
        return res.status(200).json(market);
};

export { createProduct, listProducts };