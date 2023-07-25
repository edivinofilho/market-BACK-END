import { Request, Response } from "express";
import market from "./database";
import { Products } from "./interfaces";

const createProduct = (req: Request, res: Response): Response => {
    const biggestId = market.products.reduce((biggestId, product) => {
        return product.id > biggestId ? product.id : biggestId;
    }, 0);

    const newId = biggestId + 1;

    const newProduct: Products = {
        id: newId,
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        section: req.body.section,
        calories: req.body.calories,
        expirationDate:  new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)       
    };

    market.products.push(newProduct);
    market.total += newProduct.price;
    return res.status(201).json(newProduct);
};


const productsList = (req: Request, res: Response): Response => {
    return res.status(200).json(market);
};


const productById = (req: Request, res: Response): Response => {
    const productIndex = res.locals.product;
    return res.status(200).json(productIndex);
};


const updateProduct = (req: Request, res: Response): Response => {
    const productIndex = res.locals.productIndex;
    
    market.products[productIndex] = {
        ...market.products[productIndex],
        ...req.body
    }; 
    return res.status(200).json(market.products[productIndex]);
};


const deleteProductById = (req: Request, res: Response): Response => {
    const product = res.locals.product;
    const productIndex = res.locals.productIndex;

    market.total -= product.price;
    market.products.splice(productIndex, 1);

    return res.status(204).send();
};


export { createProduct, productsList, productById, updateProduct, deleteProductById };