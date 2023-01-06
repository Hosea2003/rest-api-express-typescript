import express from 'express';
import createRoute from './route';

const app=express();

app.use(express.json())

createRoute(app);

app.listen(3000, ()=>{
    console.log("App running");
})