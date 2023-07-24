import express, { Application, json } from "express";
import { createProduct, productsList, deleteProductById, productById, updateProduct } from "./logic";
import { productNameExistsMiddleware, productIdExistsMiddleware } from "./middlewares";

const app: Application = express();
app.use(json());

app.get("/products", productsList);
app.get("/products/:id", productIdExistsMiddleware, productById);
app.post("/products", productNameExistsMiddleware, createProduct);
app.patch("/products/:id", productNameExistsMiddleware, productIdExistsMiddleware, updateProduct);
app.delete("/products/:id", productIdExistsMiddleware, deleteProductById);

const PORT: number = 3000;
const runnigMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, ()=> console.log(runnigMsg));