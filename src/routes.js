import express from 'express';
import httpStatus from "http-status";


//import {StatusCodes} from 'http-status-codes';
const router = express.Router();
const port = 3000;

//const status= require('http-status');

// http-status
const STATUS={
    status:'OK',
    FAILURE:'NO'
}

//router.use(express.json());
//app.use('/v1', approutes);

router.get('/CARS',  (req, res)=> {
    res.status(httpStatus.OK);
    res.send("Hello world i am here X 2");
});

router.post('/add' ,(req,res)=> {
    const data = [];
    const{body} =req;

    //data.push(req.body);
    if (!body.name){
        return res.status(httpStatus.BAD_REQUEST).send({
            status: STATUS.FAILURE,
            message: 'Name is required',
        });
    }
    return  res.status(httpStatus.CREATED).send({
        status: STATUS.SUCCESSFUL,
        message: data,
    })
});

export default router;