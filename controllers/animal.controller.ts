import animalData from '../data/animals.json';
import type { Request, Response } from "express";

const animalController = {

    /**
     * RequestHandler qui permet de gérer la route "(GET) /"
     */
    getAll: (req: Request, res: Response) => {
        const { offset, limit } = req.pagination!;

        const animals = animalData.slice(offset, offset + limit);
        res.status(200).json(animals);
    },

    /**
     * RequestHandler qui permet de gérer la route "(GET) /:id"
     */
    get: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.status(400).json({ error: 'Bad parameter Id !' });
            return;
        }

        const animal = animalData.find(a => a.id === id);

        if (!animal) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(animal);
    }

};

export default animalController;