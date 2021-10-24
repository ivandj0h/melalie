import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import morgan from 'morgan';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

dotenv.config()
const app = express();

import { cors } from "./config/cors.js";
import { connect, mongoRules } from "./config/default.js";
import { swaggerOptions } from "./config/swagger-options.js";
import indexRouter from "./routes/index.js";
import restaurantRouter from "./routes/restaurant.js";
import usersRouter from "./routes/user.js";

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// connect ke database mongoDB
mongoose.connect(connect.databaseUri, mongoRules);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected!'));

// middleware 
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/', indexRouter);

// ---------------------------------------------------------------------- //

// SwaggerUI - Restaurants
/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     description: get All Restaurants
 *     responses:
 *       200:
 *         description: Success
 * 
 */

// ---------------------------------------------------------------------- //

/**
 * @swagger
 * /api/restaurants:
 *   post:
 *     description: Get all Open Restaurant at certain datetime
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: Day or Hours
 *        description: Input Anything related to The Business Day/Hours
 *        schema:
 *         type: object
 *         required:
 *         - business_hours
 *         properties:
 *           business_hours:
 *             type: string
 *     responses:
 *       200:
 *         description: Search Success
 */

/**
 * @swagger
 * /api/restaurants/{id}:
 *   get:
 *     description: Get all Open Restaurant by ID.
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: find by ID
 *         schema:
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description: Success
 * 
 */

/**
 * @swagger
 * /api/restaurants/resto-dishes:
 *   post:
 *     description: Search for restaurants name, ranked by relevance to search term
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: Resto or Dishes
 *        description: Input Anything related to Restaurant name or dishes
 *        schema:
 *         type: object
 *         required:
 *         - name
 *         properties:
 *           name:
 *             type: string
 *     responses:
 *       200:
 *         description: Search Success
 */


/**
 * @swagger
 * /api/restaurants/match-dishes:
 *   post:
 *     description: Search for restaurants that has a dish matching search term
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: Resto or Dishes
 *        description: Input Anything related to dishes
 *        schema:
 *         type: object
 *         required:
 *         - name
 *         properties:
 *           name:
 *             type: string
 *     responses:
 *       200:
 *         description: Search Success
 */


app.get('/restaurants', (req, res) => {
    res.redirect(307, '/api/restaurants');
});
app.use('/api/restaurants', cors(), restaurantRouter);

// ---------------------------------------------------------------------- //

// SwaggerUI - Users
/**
 * @swagger
 * /api/users:
 *   get:
 *     description: get All Users
 *     responses:
 *       200:
 *         description: Success
 * 
 */

/**
 * @swagger
 * /api/users/total-transaction:
 *   get:
 *     description: get All Users
 *     responses:
 *       200:
 *         description: Success
 * 
 */

app.get('/users', (req, res) => {
    res.redirect(307, '/api/users');
});
app.use('/api/users', cors(), usersRouter);


// listening to port
app.listen(connect.applicationPort, async () => {
    try {
        console.log(`Server Running at ${connect.applicationUri}:${connect.applicationPort}`)
    } catch (error) {
        throw new Error('Oops!, Something Wrong!');
    }
});