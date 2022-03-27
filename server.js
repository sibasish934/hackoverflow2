const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;
const fileupload = require('express-fileupload');

const intial_path = path.join(__dirname+'/src');

console.log(intial_path);

app.use(express.static(intial_path));
app.use(function (req, res, next) {

    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,image');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(fileupload());

app.get('/',function(req,res){
    res.status(200).sendFile(intial_path+'/html/index.html');
});

app.get('/home',function(req,res){
    res.status(200).sendFile(intial_path+'/html/blog.html');
});
  
app.get('/editor',function(req,res){
    res.status(200).sendFile(intial_path+'/html/editor.html');
});


app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate()+date.getTime()+file.name;
    // image upload path
    let path = `${intial_path}/uploads/${imagename}`;
    let imgPath = `../uploads/${imagename}`;

    // create upload
    file.mv(path,(err) => {
        console.log(err);
        if(err){
            throw err;
        } else{
            res.json({path: imgPath});
        }
    })
    // res.json({"name":path});
})

app.get("/product",(req,res)=>{
    res.status(200).sendFile(intial_path+'/html/product.html');
})
 app.get("/blogs", (req, res) => {
    res.sendFile(intial_path+'/html/blog.html');
})
app.get('/service',function(req,res){
    res.status(200).sendFile(intial_path+'/html/service.html');
});
app.use((req, res) => {
    res.json("404");
})
app.listen(port, ()=>{
    console.log(`this server is running in ${port}`)
});
  