const express = require('express');
const app = express();

function validateUser(req, res, next){
    res.locals.validated = true;
    console.log("Validated Ran");
    // tells the next piece of middleware it's ok to run
    // if this is missing, cycle terminates and no more middleware functions will run
    next();
}

const validateUserTwo = (req, res, next) => {
    res.locals.validated = true;
    console.log("Validated Ran");
    // tells the next piece of middleware it's ok to run
    // if this is missing, cycle terminates and no more middleware functions will run
    next();
};

// app.use makes the validateUser function run everytime a http request is processed
app.use('/admin', validateUserTwo);

app.get('/', (req, res, next)=>{
   res.send("<h1>Blits\'s Main Page 3</h1>");
   // console.log(res.locals.validated);
});

app.get('/admin', (req, res, next)=>{
    res.send("<h1>Blits\'s Admin Page</h1>");
    console.log(res.locals.validated);
});

app.listen(3000, ()=>{
    console.log('server connected to port 3000');
});