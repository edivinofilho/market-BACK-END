import express, { Application, json } from "express";
import { createProduct, listProducts } from "./logic";

const app: Application = express();
app.use(json());

app.post("/products", createProduct);
app.get("/products", listProducts);

const PORT: number = 3000;
const runnigMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, ()=> console.log(runnigMsg));