import type { Request, Response } from "express";
import { AppDataSource } from '../models/db.ts';
import Animal from '../models/animal.model.ts';
import BiologicalClass from '../models/biological-class.model.ts';
import { animalDataValidator } from "../validators/animal.validator.ts";

const animalController = {

    /**
     * RequestHandler qui permet de gérer la route "(GET) /"
     */
    getAll: async (req: Request, res: Response) => {
        const { offset, limit } = req.pagination!;

        const animalRepo = AppDataSource.getRepository(Animal);
        const animals = await animalRepo.find({
            select: {
                id: true,
                name: true
            },
            skip: offset,
            take: limit
        });

        res.status(200).json(animals);
    },

    /**
     * RequestHandler qui permet de gérer la route "(GET) /:id"
     */
    get: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            res.status(400).json({ error: 'Bad parameter Id !' });
            return;
        }

        const animalRepo = AppDataSource.getRepository(Animal);

        const animal = await animalRepo.findOne({
            where: { id },
            relations: {
                bioClass: true
            }
        });

        if (!animal) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(animal);
    },

    /**
     * RequestHandler qui permet de gérer la route "(POST) /"
     */
    create: async (req: Request, res: Response) => {

        //? Validation avec "Zod"
        const { data, success, error } = animalDataValidator.safeParse(req.body);
        if (!success) {
            res.status(422).json({ error: error.flatten().fieldErrors });
            return;
        }

        //? Biological Class
        const bcRepo = AppDataSource.getRepository(BiologicalClass);
        const bc = await bcRepo.createQueryBuilder()
            .where("LOWER(name) = LOWER(:name)", { name: req.body.bioClass })
            .getOne();

        if (!bc) {
            res.status(422).json({ error: "Biological class not valid !" });
            return;
        }

        //? Animal
        const animalData: Omit<Animal, 'id'> = { ...data, bioClass: bc };

        const animalRepo = AppDataSource.getRepository(Animal);
        const animal = animalRepo.create(animalData);
        animalRepo.save(animal);

        res.location(`/api/animal/${animal.id}`);
        res.status(201).json(animal);
    }
};

export default animalController;