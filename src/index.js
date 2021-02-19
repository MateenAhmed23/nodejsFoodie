const express = require('express');
require('./db/mongoose');


var cors = require('cors')




const dealRouter = require('./routers/Deal');
const contactRouter = require('./routers/Contact');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.use(cors()) // Use this after the variable declaration

app.use(dealRouter);
app.use(contactRouter);


app.listen(port,()=>{
    console.log("Connected to port " + port);
})