const express = require('express');
const bodyParser= require('body-parser');
const hbs=require('express-handlebars');
const Path= require('path');

const app=express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// signuproutes
const usersRoutes=require('./routes/users');

app.use('/users',usersRoutes);

// view engine
app.set('view engine','hbs');
app.engine('hbs',hbs({layoutsDir:__dirname + '/views/layouts', extname:'hbs'}));

// static files
app.use(express.static(__dirname +'/public'));

// landing page
app.get('/',function (req,res) {
    res.render('index');

});

app.get('/signup',function(re,res){
 res.render('signup');
});
const port=8000;

app.listen(port,()=>{
    console.log('listening on port ' + port);
});
