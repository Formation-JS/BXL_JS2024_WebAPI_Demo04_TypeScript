import type { Controller } from "../@types/common.d.ts";
import animalData from '../data/animals.json';
import { RequestWithPagination } from "../middlewares/pagination.middleware.ts";

const animalController = {

    /**
     * RequestHandler qui permet de gérer la route "(GET) /"
     */
    getAll: (req, res) => {
        const {offset, limit} = (req as RequestWithPagination).pagination;

        const animals = animalData.slice(offset, offset + limit);
        res.status(200).json(animals);
    },

    /**
     * RequestHandler qui permet de gérer la route "(GET) /:id"
     */
    get: (req, res) => {
        const id = parseInt(req.params.id);

        if(isNaN(id)) {
            res.status(400).json({ error: 'Bad parameter Id !'});
            return;
        }

        const animal = animalData.find(a => a.id === id);

        if(!animal) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(animal);
    }

} as const satisfies Controller;

export default animalController;