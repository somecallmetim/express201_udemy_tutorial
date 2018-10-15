const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');

app.use(express.static('public'));
// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());

// set's the templating engine to EJS
app.set('view engine', 'ejs');
// explicitly tells the templating/views engine where to look for templates
app.set('views', path.join(__dirname, 'views'));

function validateUser(req, res, next){
    // ... validated logic
    res.locals.validated = true;
    next();
}

app.use(validateUser);

app.get('/about', (req, res, next)=>{
    res.render('about');
});

app.get('/', (req, res, next)=>{
    // res.send("<h1>Blitz says, \"a rolling golem gathers no rust...\"</h1>");
    // res.json({
    //    msg: "Definitely not Blitzcrank!"
    // });

    // the data in the second arg is appended to res.locals
    res.render("index", {
        msg: "Success!",
        msg2: "More Success!",
        html: `<p><img src="node.png"/></p>`
    });
});

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
});