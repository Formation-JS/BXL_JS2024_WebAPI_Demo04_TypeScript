import type { Controller } from "../@types/common.d.ts";

const animalController = {

    /**
     * RequestHandler qui permet de gérer la route "(GET) /"
     */
    getAll: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * RequestHandler qui permet de gérer la route "(GET) /:id"
     */
    get: (req, res) => {
        res.sendStatus(501);
    }
    
} as const satisfies Controller;

export default animalController;