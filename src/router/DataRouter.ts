import {Request, Response, Router} from 'express';
import { request } from 'http';
import {datapost, deletedata, findAll, findByID, updatedata} from '../services/DataServices';
import {datas} from '../contracts/Data';

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

//delete
DataRouter.delete('/data/:id', async(req:Request, res:Response)=>{
    let deleteid:number = Number(req.params.id)
    const todelete = await deletedata(deleteid)
    res.status(200).json({message:`data of id ${deleteid} has been deleted`, data: todelete  })
})

//put 
DataRouter.put('/data/:id', async(req:Request, res:Response) => {
    let updateid:number = Number(req.params.id)
    let updated:datas = req.body
    try{
        // console.log(updated)
         const updatedArray = await updatedata(updateid, updated)
         res.status(200).json({message:"update success", data:updatedArray})
    }catch(error){
        res.json(error)
    }
})