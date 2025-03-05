import { Router } from "express";
import animalRouter from "./animal.router.ts";


const mainRouter = Router();

mainRouter.use('/animal', animalRouter);

export default mainRouter;