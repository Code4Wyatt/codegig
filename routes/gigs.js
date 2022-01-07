import { Router } from "express";
import db from "../config/database.js";
import Gig from "../models/Gig.js";

const gigsRouter = Router();

gigsRouter.post("/", async (req,res,next) => {
    try {
        console.log(req.body);
        const gig = await Gig.create(req.body);
        res.send(gig);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

gigsRouter.get("/", async (req, res, next) => {
    try {
        const allGigs = await Gig.findAll();
        res.send(allGigs);
    } catch (error) {
        console.log(error);
        next(error);
    }
});



export default gigsRouter;