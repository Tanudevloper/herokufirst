// import statement
require("dotenv").config({path:'.env'});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors= require('cors');
const albumsRoutes = require('./route/post');


const app = express();
//const PORT = process.env.PORT || 5000;


 mongoose.connect(process.env.DATABASE, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 })
 .then(()=>{              
     console.log("DB CONNECT");
});
//MiddleWare
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
})
// app.use();

// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
  

//Routes API

app.use("/api",albumsRoutes);

//Port
const port = process.env.PORT || 8000;
   
//Server
app.listen(port, () => console.log(`Server up and running on port ${port} !`));