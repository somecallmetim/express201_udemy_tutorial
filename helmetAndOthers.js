const express = require('express');
const app = express();
// gives us a bunch of free security features!!!
const helmet = require('helmet');


app.use(helmet());
// allows us to serve any file in the public folder
app.use(express.static('public'));
// allows us to deal with json we may have gotten in an http request
app.use(express.json());
// data from an http request usually comes in the form application/x-www-form-urlencoded (mime-type)
    // this is typically how data is passed around
app.use(express.urlencoded({extended:false}));


app.post('/ajax', (req, res)=>{
    console.log(req.body);
    res.json("test");
});

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});