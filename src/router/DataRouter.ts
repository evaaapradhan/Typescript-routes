import {Request, Response, Router} from 'express';
import { request } from 'http';
import {datapost, findAll, findByID} from '../services/DataServices';

export const DataRouter: Router = Router();

// Get all data 
DataRouter.get('/data', async(req: Request, res: Response) => {
    try{
        const result = await findAll();
        res.send(result);
    } catch (error){
        //logger
        res.status(404).send('Error');
    }
});

//Get by ID
DataRouter.get('/:id', async (req: Request, res: Response)=>{
    try{
        const result = await findByID(Number(req.params.id));
        res.json(result);
    } catch (error){
        //logger
        res.status(404).json('error');
    }
})
 //POST
DataRouter.post('/data', async (req: Request, res: Response)=>{
    const newArrayData = {
        id: Number(req.body.id),
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        country: req.body.country,
    }
    try{
        const result = await datapost (newArrayData);
        res.status(200).json(result)
    } catch (error){
        //logger
        res.status(404).json('error');
    }
})