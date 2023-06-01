import express from "express";
import { PORT }  from "./config/index.js";
import { dbConnet } from "./db/mongo.js";


import {
    getItems,
    getItem,
    createItem,
    deleteItem,
    updateItem,
} from "./controllers/books.js";

const app = express();

app.use(express.json());

const port = PORT;

app.get("/api/books", getItems);

app.get("/api/books/:id", getItem);


app.post("/api/books", createItem);

app.delete("/api/books/:id", deleteItem);

app.put("/api/books/:id", updateItem);


app.listen(port, () =>{
    console.log(`Server on ${port}`);
});

dbConnet();
