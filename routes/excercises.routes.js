import express from 'express';
import { getExcercises, createExcercise, getExcercise, replaceExcercise, deleteExcercise, updateExcercise } from '../controllers/excercises.controllers.js';

const excercisesRouter = express.Router(); // Router is a method on express object that we're importing above...it's what allows us to set up routes...it is a method that accepts routes and then the function you wand to call on those routes...and these funcitons are found in the controller

// GET to /api/v1/excercises
excercisesRouter.get('/', getExcercises);

// POST /api/v1/excercises
excercisesRouter.post('/', createExcercise);

// GET /api/v1/excercises/<id>
excercisesRouter.get('/:id', getExcercise); // this is a get to a single excercise by a user provided id...id's populate in req.params(we write this in our controller)

// PUT /api/v1/excercises/<id>
excercisesRouter.put('/:id', replaceExcercise);

//DELETE /api/v1/excercises/<id>
excercisesRouter.delete('/:id', deleteExcercise);

// PATCH /api/v1/excercises/<id>
excercisesRouter.patch('/:id', updateExcercise);

export default excercisesRouter;

// This is where you define API routes...each API route in here invokes our controller which then calls our coordinator which then calls our model and then our router manipulates our database*
