const express = require('express');
const app = express();

require('dotenv').config();

const {router} = require('./routes/index.js');

app.use(router);

const server = app.listen(process.env.PORT || 8080, ()=>{
   
   console.log("listening");
    
});