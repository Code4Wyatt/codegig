import express from "express";
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import path from "path";
import db from "./config/database.js";
import gigsRouter from "./routes/gigs.js";
import { fileURLToPath } from 'url';
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access';
import Handlebars from "handlebars";

const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
  // Test db connection

db.authenticate().then(() => console.log('Database Connected')).catch((error) => console.log("Database error: ", error));

const app = express();

app.use(express.json());

// middlewares

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Static styles folder

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => res.send('INDEX'))

app.use("/gigs", gigsRouter)



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));