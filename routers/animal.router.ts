import { Router } from "express";
import animalController from "../controllers/animal.controller.ts";
import { paginationMiddleware } from "../middlewares/pagination.middleware.ts";


const animalRouter = Router();

animalRouter.route('/')
    .get(paginationMiddleware(), animalController.getAll)
    .post(animalController.create)
    .all((_, res) => { res.sendStatus(405); });

animalRouter.route('/:id')
    .get(animalController.get)
    .all((_, res) => { res.sendStatus(405); });

export default animalRouter;