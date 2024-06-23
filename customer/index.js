const express = require('express');

const app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{

    return res.status(200).json({"msg":"Hello from Shopping"});
})

app.listen(8003,()=>{
    console.log("Customer is Listening to port 8003")
})

