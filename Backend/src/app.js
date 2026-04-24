const express = require("express");
const multer = require("multer");
const postModel = require("./models/post_model.js");
const uploadFile = require("./services/storage.service.js");
const cors=require("cors");

const app = express();

//middlewares:
app.use(cors());
app.use(express.json());
const upload = multer({storage : multer.memoryStorage()})

app.post("/create-post",upload.single("image"),async (req,res)=>{
   

    const result = await uploadFile(req.file.buffer);
    

    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption,
    })

    return res.status(201).json({
        message:"Post Created", 
        post,
    })
});

app.get("/posts",async(req,res)=>{
    const posts= await postModel.find()

    return res.status(200).json({
        message:"Posts fetched successfully",
        posts,
    })
})






module.exports=app;