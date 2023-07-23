import express, { Application, Request, Response, json } from "express";

const app: Application = express();
app.use(json());

app.post("/", (req: Request, res: Response): Response => {
    return res.status(201).json(req.body);
});

app.get("/", (req: Request, res: Response): Response => {
    return res.status(200).json( { status: "OK" } );
});

app.get("/:id", (req: Request, res: Response): Response => {
    const returnObj = {
        pathParam: req.params.id,
        queryParam: req.query.myQuery
    }

    return res.status(200).json(returnObj);
});

const PORT: number = 3000;
const runnigMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, ()=> console.log(runnigMsg));