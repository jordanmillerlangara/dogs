const express = require('express');
const app = express();
app.use(require('cors')());

require('dotenv').config();

const {router} = require('./routes/index.js');

app.use(router);

const server = app.listen(process.env.PORT || 8080, ()=>{
   
   console.log("listening");
    
});