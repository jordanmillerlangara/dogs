const {cp} = require('../db/connection.js');
const mysql = require('mysql');

// Get All Dogs
const getDogs = (req,res)=>{
    
    cp.query('SELECT * FROM dog;', (error,results)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            res.send(results);
        }
    })
    
}

// Get Dog by ID
const getDogById = (req,res)=>{
    
    cp.query(`SELECT * FROM dog WHERE dog_id=${mysql.escape(req.params.id)};`, (error,results)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            res.send(results);
        }
    })
    
}

module.exports = {
    getDogs, getDogById
}