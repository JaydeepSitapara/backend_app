import express from 'express';
import 'dotenv/config'
import connectDB from './db/index.js';
const app = express();
connectDB();

app.get('/', (req, res) => {  
    res.send("hello");  
 });  

app.listen(process.env.PORT, () =>  {
    console.log('APP LISTEN ON ', process.env.PORT);
});
