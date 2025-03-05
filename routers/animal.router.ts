import { Router } from "express";
import animalController from "../controllers/animal.controller.ts";


const animalRouter = Router();

animalRouter.route('/')
    .get(animalController.getAll)
    .all((_, res) => { res.sendStatus(405); });

animalRouter.route('/:id')
    .get(animalController.get)
    .all((_, res) => { res.sendStatus(405); });

export default animalRouter;