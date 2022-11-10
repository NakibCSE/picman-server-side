const express=require('express')
const cors=require('cors')
const app=express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//user: assignment-11
//password: JZQ95cfiCQAwXfTn


app.get('/',(req,res)=>{
    res.send('server is running')
})


const uri = "mongodb+srv://assignment-11:<password>@cluster0.8gqynbm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{

    }
    finally{
        run().catch(console.dir)
    }
}



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})