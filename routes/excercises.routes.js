import express from 'express';
import { getExcercises, createExcercise } from '../controllers/excercises.controllers.js';

const excercisesRouter = express.Router(); // Router is a method on express object that we're importing above...it's what allows us to set up routes...it is a method that accepts routes and then the function you wand to call on those routes...and these funcitons are found in the controller

// GET to /api/v1/excercises
excercisesRouter.get('/', getExcercises);

//POST /api/v1/excercises
excercisesRouter.post('/', createExcercise);



export default excercisesRouter;

// This is where you define API routes...each API route in here invokes our controller which then calls our coordinator which then calls our model and then our router manipulates our database*
