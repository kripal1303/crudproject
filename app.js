
const { profile } = require('console');
const express = require ('express');
const app = express();
const PORT = 6500;
const hbs = require('hbs');
const path = require('path');

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','hbs');
app.use(express.urlencoded({extended: true}));


hbs.registerPartials(__dirname + '/views/partials');
const {parse} = require('path');



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

app.get('/:id',(req,res)=>{
  const {id} = req.params;
  const myProfile = profiles.filter((profile)=>profile.id===parseInt);
  res.render('singleProfile',myProfile[0]);
})

app.get('/:id/edit',(req,res)=>{
  const {id}=req.params;
  const myProfile = profile.filter((profile)=>profile.id===parseInt);
  res.render('editYourProfile',myProfile[0]);

})










app.listen(PORT, () => {
  console.log(`http//localhost:${PORT}`);
})