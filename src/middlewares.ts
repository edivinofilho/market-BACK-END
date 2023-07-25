import { NextFunction, Request, Response } from "express";
import market from "./database";
import { Products } from "./interfaces";


const productNameExistsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const name = req.body.name;
    const productName: Products | undefined = market.products.find((product) => product.name === name);
    
    if(productName){
        return res.status(409).json( { message: "Product already registered." } );
    };

    res.locals.product = productName;

    return next();
}


const productIdExistsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const product: Products | undefined = market.products.find((product) => product.id === Number(req.params.id));

    const productIndex: number = market.products.findIndex((product) => product.id === Number(req.params.id));

    if(!product) {
        return res.status(404).json( { message: "Product not found." } )
    };

    res.locals.product = product;
    res.locals.productIndex = productIndex;

    return next();
}

export { productNameExistsMiddleware, productIdExistsMiddleware };