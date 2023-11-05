const express=require("express");
const app=express();
app.use(express.json());
const morgan=require("morgan");
app.use(morgan('dev'));
const createError=require("http-errors");
const dotenv=require("dotenv");
dotenv.config();
const { connection }=require("./config/database")
connection();
const { router }=require("./routes/urlRoute");




app.use(router);


app.get('/', async(req,res,next)=>{
    res.status(200).json({
        message:"This is a Url shortner page"
    })
});

app.use((req,res,next)=>{
    res.send(createError.NotFound("Sorry, The page you are searching doesnot exist"));
})

app.use(async(err,req,res,next)=>{
    res.status(500).json({
        message:err.message
    })
})

const PORT=process.env.PORT || 3000
app.listen(PORT,"127.0.0.1",
()=>{
    console.log(`Listening to the port ${PORT}`);
})