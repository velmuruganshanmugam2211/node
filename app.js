const express = require("express")
const morgan = require("morgan")

const app = express()

app.listen(3000);

app.use(morgan('dev'));

// app.use((req,res,next)=>{
//     console.log('Requested Received')
//     console.log(req.host);
//     console.log(req.path);
//     console.log(req.method);
//     next();
// })

app.get("/",(req,res)=>{
    // res.status(200).send("<h2>Code with Velu</h2>")
    res.sendFile('./docs/index.html',{root:__dirname});
})
app.get("/about",(req,res)=>{
    res.sendFile('./docs/about.html',{root:__dirname});
})
app.get("/feature",(req,res)=>{
    res.sendFile('./docs/feature.html',{root:__dirname});
})
app.get("/project",(req,res)=>{
    res.sendFile('./docs/projects.html',{root:__dirname});
})

// redirect
app.get("/projects",(req,res)=>{
    res.redirect('/project');
})

// not found
app.use((req,res)=>{
    res.status(404).sendFile('./docs/NotFound.html',{root:__dirname});
})

