const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const roleRoute = require('./routes/userRoutes.js')
const cors = require('cors')
require('dotenv').config()


//using CORS for proxy process
app.use(cors({origin: 'http://localhost:3000/'}))
//middleware: read kar paege json files ko
app.use(express.json());

//use UserModel
app.use('/api/roles', roleRoute);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Connected to the sever",process.env.PORT);    
    })
}).catch((error)=>{
    console.log(error);
})