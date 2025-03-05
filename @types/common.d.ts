import type { RequestHandler } from 'express';

/**
 * Objet avec des clefs qui ont comme valeur une méthode "RequestHandler"
 */
export type Controller = {
    [name: string]: RequestHandler;
};
// export type Controller = Record<string, RequestHandler>;