
const express = require ('express');
const app = express();
const PORT = 5500;
const hbs = require('hbs');
const path = require('path');

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','hbs');
app.use(express.urlencoded({extended: true}));

hbs.registerPartials(__dirname + '/views/partials');



let profiles =[];
let num =1;


//GET ALL THE PROFILES HERE 
app.get('/', (req, res) => {
  res.render('profiles',{
    profiles: profiles,
    // profilePresent: profiles.length>0
  });
})


//CREATE NEW PROFILE HERE
app.get('/profile/new',(req,res)=>{
    res.render('newProfile');
})

//ADDING A NEW PROFILE

app.post('/',(req,res)=>{
    const {clientname,clientage,clientpart,clientlevel} = req.body;
    profiles.push({
id:num,
clientname,
clientage,
clientpart,
clientlevel
    })
    num++;
    res.redirect('/');
    
})












app.listen(PORT, () => {
  console.log(`http//localhost:${PORT}`);
})