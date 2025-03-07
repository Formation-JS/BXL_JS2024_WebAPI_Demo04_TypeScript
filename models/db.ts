import { DataSource } from "typeorm";
import BiologicalClass from "./biological-class.model.ts";
import Animal from "./animal.model.ts";

const {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD
} = process.env;

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: parseInt(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [
        BiologicalClass,
        Animal
    ]
});