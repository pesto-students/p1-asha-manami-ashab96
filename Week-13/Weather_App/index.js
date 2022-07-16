import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './src/handlers/errorhandlers.js';
import weatherRoutes from './src/routes/weatherroutes.js';


dotenv.config();
const app = express();

app.get('/',(req,res) => {
    res.send('API is  running!');
});
app.use('/weather',weatherRoutes);
app.use(errorHandler);

const port = process.env.port || 5000;
app.listen(port,() =>{
    console.log("server started Succesfully");
});