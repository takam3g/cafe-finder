const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

//Connect with database
const connected = require('./connection.js');

//Define PORT
const PORT = process.env.PORT || 8080

//Run server only after database is connected
connected 
.then(()=>{
    console.log('connected');
    const server = app.listen(PORT, () => {

      app.use('/', (req, res) => {
          res.send(`Server running on PORT ${PORT}`) 
      });

    });
});


//Make it possible to read the data urlencoded and in JSON format sent by client
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Import router
const router = require('./routes/index.js');
app.use('/api/v1', router);