import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from './routers/index.ts';

//! Variable d'env
const { NODE_ENV, PORT } = process.env;

//! Mise en place de la Web API
const app = express();

//! App middleware
//? Logger
app.use(morgan('tiny'));

//? Cors
app.use(cors());

//! Routing
app.use('/api', mainRouter);

//! Démarrage de la Web API
app.listen(PORT, () => {
    console.log(`Web API is running on port ${PORT} (${NODE_ENV})`);
});