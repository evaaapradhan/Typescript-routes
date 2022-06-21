
import express, { Express } from "express";
import { DataRouter } from "./router/DataRouter";
import bodyParser from 'body-parser';
// import { env } from 'process';
// import * as dotenv from 'dotenv';
const app: Express = express();
// const port = process.env.PORT;
const PORT = 4000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", DataRouter);
// app.listen(port,()=>{
//     console.log(`listening on port: ${port}`);
// });
// dotenv.config();
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});
