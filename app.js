import express from "express";
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import path from "path";
import db from "./config/database.js";

  // Test db connection

db.authenticate().then(() => console.log('Database Connected')).catch((error) => console.log("Database error: ", error));

const app = express();

app.get("/", (req, res) => res.send('INDEX'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));