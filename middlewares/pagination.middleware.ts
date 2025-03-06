import type { NextFunction, Request, Response } from "express";

export function paginationMiddleware({
    defaultLimit = 10,
    maxLimit = 50
} = {}) {

    /**
     * Middleware de pagination
     */
    return function (req: Request, res: Response, next: NextFunction) {

        const offsetRecive = (Array.isArray(req.query.offset) ? req.query.offset[0] : req.query.offset)?.toString();
        const limitRecive = (Array.isArray(req.query.limit) ? req.query.limit[0] : req.query.limit)?.toString();

        //! Traitement des infos
        const offset = parseInt(offsetRecive || '0');

        const requestLimit = parseInt(limitRecive || defaultLimit.toString());
        const limit = Math.min(requestLimit, maxLimit);

        //! Erreur si une des valeurs est négative
        if (isNaN(offset) || isNaN(limit) || offset < 0 || limit < 0) {
            res.status(400).json({ error: 'Value of "offset" or "limit" must be positive' });
            return;
        }

        //! Injection de données dans l'objet "req"
        //? On peut également utiliser l'objet "res", en fonction du cas de figure.
        req.pagination = {
            offset,
            limit
        };

        //! On passe au prochain middleware
        next();
    };
}

