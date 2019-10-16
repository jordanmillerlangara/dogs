require('dotenv').config();

const {cp} = require('../db/connection.js');

cp.query('DROP TABLE IF EXISTS dog; DROP TABLE IF EXISTS owner; CREATE TABLE owner (name varchar(255) NOT NULL, owner_id int AUTO_INCREMENT, PRIMARY KEY (owner_id)); CREATE TABLE dog (name varchar(255) NOT NULL, dog_id int AUTO_INCREMENT, owner_id int, PRIMARY KEY (dog_id), CONSTRAINT dog_owner_fk FOREIGN KEY (owner_id) REFERENCES owner (owner_id));', (error,result)=>{
    
    if(error)
    {
        console.log(error);
    }
    else {
        console.log('successfully created tables. Now adding data');
        
        cp.query('INSERT INTO dog (name) VALUES ("Rover"); INSERT INTO dog (name) VALUES ("Rex"); INSERT INTO dog (name) VALUES ("Scuffles");', (error, result)=>{
           if(error){
               console.log(error);
           } 
           else {
               console.log("add dogs.")
               process.exit();
           }
        });
    }
})