import express from 'express'
import cors from 'cors'
import 'dotenv/config' // Global declaration
import dataConnection from './config/dataBase.js';
import connectCloud from './config/cloudConnect.js';
import blogRouter from './routes/blogRoutes.js';
import emailRouter from './routes/emailRoutes.js';

const app = express();
const port = 8000;


// App config

dataConnection();
connectCloud();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/blog',blogRouter)
app.use('/api/email',emailRouter)



// Checking route

app.get('/',(req,res)=>{
    res.send('API Working')
})

// Checking port is working or not

app.listen(port,()=>{
    console.log('Server is running on :',port)
})

