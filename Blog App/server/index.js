import express from 'express'//for this statment we add one point in package.json(type:module)
import Connection from "./database/db.js"
import cors from 'cors'// cors origin request 
import Router from './routes/route.js'
import bodyParser from 'body-parser'
const app=express();//express initialization
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router)
const port=4444;


app.listen(port,()=>console.log(`Server is running on port ${port}`))

Connection();
