import express from 'express';
import mongoose from 'mongoose';
import routerProduct from './routes/product.js';
import router from './routes/project.js';
const app = express();
const port = 3000;

app.use(express.json())
// app.use(express.urlencoded())

app.use(router)
app.use(routerProduct)

app.use('/api',router);



app.listen(port,async ()=>{
    try{
        await mongoose.connect('mongodb+srv://juanes98:J1036682077*@cluster0.wiuas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("Connected to db")


    }
    catch(e){
        console.log(e)
    }
    console.log(`Listening to port ${port}`)
})

