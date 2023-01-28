// let profiles = [
//     {
//       clientname:"chakshu",
//       clientage:"19",
//       clientpart:"chest",
//       clientlevel:"intermediate",
//       id:1  
//     },
//     {
//       clientname:"chakshu",
//       clientage:"19",
//       clientpart:"chest",
//       clientlevel:"intermediate",
//       id:2
//     },
//     {
//       clientname:"chakshu",
//       clientage:"19",
//       clientpart:"chest",
//       clientlevel:"intermediate",
//       id:3 
//     }
//   ];

  const Profiles=require('../models/profiles')

module.exports.getProfiles= (req,res,next)=>{
    Profiles.getProfilesFunction()
    .then((profiles)=>{
      res.render('profiles',{
        profiles
      })
    }).
    catch((err=>console.log(err)))
    
}
module.exports.createProfile= (req,res,next)=>{
    res.render('newProfile')
}
module.exports.postCreateProfile=(req,res,next)=>{
  const clientname=req.body.name;
  const clientage=req.body.age;
  const clientlevel=req.body.level;
  const clientpart=req.body.part;

  let newProfile= new Profiles(clientname,clientage,clientpart,clientlevel)
  newProfile
  .save()
  .then((data)=>{
    console.log(data)
    res.redirect('/profiles')
  })

}
module.exports.showProfile=(req,res,next)=>{
  const{id}=req.params
  Profiles.showProfileDetails(id)
  .then((data)=>{
    console.log(data)
    res.render('singleProfile')
  }).catch(err=>console.log(err))
}

module.exports.getEditProfile=(req,res,next)=>{
  const {id}=req.params
  Profiles.showProfileDetails(id)
  .then((data)=>{
    console.log(data)
    res.render('editYourProfile')
  })

}

module.exports.postEditProfile=(req,res,next)=>{
  const {clientname,clientage,clientpart,clientlevel}=req.body
  const {id}=req.params
  Profiles.postEditProfile(id,clientname,clientage,clientpart,clientlevel)
  .then(()=>{
    res.redirect('/profiles')
  })

}
module.exports.deleteProfile=(req,res,next)=>{
  const {id}=req.params
  Profiles.deleteProfile(id)
  .then(()=>{
    res.redirect('/profiles')
  })

}