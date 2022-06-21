
import express, { Express } from "express";
import { DataRouter } from "./router/DataRouter";
import bodyParser from 'body-parser';
// import { env } from 'process';
import dotenv from 'dotenv';
// import * as dotenv from 'dotenv';
const app: Express = express();
dotenv.config();
const port = process.env.PORT;
// const PORT = 4000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", DataRouter);
// app.listen(port,()=>{
//     console.log(`listening on port: ${port}`);
// });

app.listen(port, () => {
  console.log('listening on port:', port);
});
