import express from 'express';
import excercisesRouter from './routes/excercises.routes.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Starting express application on port ${port}`);
}); // .listen is a method on express (saved to app) that turns on your express instance on a given port

app.use('/api/v1/excercises', excercisesRouter);
// app.use here is express.use...a function that adds middleware(and our router).  It takes 2 params: the url endpoint you're supporting and the middleware you're adding...in this case our router we exported form .routes/excercises.routes

/* we're going to execute this file and it's going to run our service so I need for index.js to know what urls/method are supported.
..what code we call when one is invoked, etc. ...we're going to handle that with a router */
