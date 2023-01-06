import {Express} from 'express';
import userRouter from './routes/user.route';

function createRoute(app:Express){
    app.use('/user', userRouter)
}

export default createRoute;