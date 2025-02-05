const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const TaskRouter = require('./Routes/TaskRouter');
require('dotenv').config();
require('./Modal/db');

//set port number
const PORT = process.env.PORT || 8080;

//listen the port
app.listen( PORT , ()=>{
    console.log(`Server started : ${PORT}`)
    }
)

app.use(bodyParser.json());
//allow open request
app.use(cors());//put any ip for security of server

app.use('/authentication',AuthRouter);
app.use('/tasks', TaskRouter);


//set response
app.get('/',(req,res)=>{
    res.send('Hello');
})