const express = require('express');
const {DBConnection} = require("./config/db");

const app= express();
const PORT = 5000;

DBConnection()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log(`sever is running on http://localhost:${PORT}`);
    
})