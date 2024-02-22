import express from "express"
import mongoose from "mongoose";


const app = express()

const port = 3000;
mongoose.connect('mongodb://localhost:27017/abcdef');
const dataschema = new mongoose.Schema({
    name:{type:String}
});

const Data=mongoose.model("Data",dataschema);

app.post("/",async(req,res)=>{
    const data = "jhekj"
    const info = new Data({
        name : data

    })
    await info.save();
    res.send("data inserted successfully");
});

app.listen(port,()=>{
    console.log(`servern is ruuning on port ${port}`)
});