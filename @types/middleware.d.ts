import type { Request } from "express";

declare module 'express-serve-static-core' {

    interface Request extends Request {
        pagination?: {
            offset: number;
            limit: number;
        };
    }
}
