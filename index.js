const express=require('express')
const cors=require('cors')
const app=express();

const port=process.env.PORT || 5000
require('dotenv').config()

app.use(cors())
app.use(express.json())

//user: assignment-11
//password: JZQ95cfiCQAwXfTn


app.get('/',(req,res)=>{
    res.send('server is running')
})






app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})