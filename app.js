
const express = require("express");
const app = express();
const PORT = 6800;
const hbs = require("hbs");
const path = require("path");
var methodOverride = require("method-override");
const { parse } = require("path");

app.use(express.static(path.join(__dirname, "static")));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
hbs.registerPartials(__dirname + "/views/partials");

let num = 1;
let profiles = [];


//GET ALL THE PROFILES HERE
app.get("/", (req, res) => {
  res.render("profiles", {
    profiles: profiles,
    // profilePresent: profiles.length>0
  });
});

//CREATE NEW PROFILE HERE
app.get("/profile/new", (req, res) => {
  res.render("newProfile");
});

//ADDING A NEW PROFILE

app.post("/", (req, res) => {
  const { clientname, clientage, clientpart, clientlevel } = req.body;
  profiles.push({
    id: num,
    clientname,
    clientage,
    clientpart,
    clientlevel,
  });
  num++;
  res.redirect("/");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const newProfile = profiles.filter((profile) => profile.id === parseInt(id));
  res.render("singleProfile", newProfile[0]);
});

app.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  const newProfile = profiles.filter((profile) => profile.id === parseInt(id));
  res.render("editYourProfile",newProfile[0]);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  let myIndex;
  profiles.map((profile, indx) => {
    if (profile.id == parseInt(id)) {
      myIndex = indx;
    }
  })
  const { clientname, clientage, clientpart, clientlevel } = req.body;
 
  profiles[myIndex].clientname = clientname;
  profiles[myIndex].clientage = clientage;
  profiles[myIndex].clientpart = clientpart;
  profiles[myIndex].clientlevel = clientlevel;

  res.redirect("/");
})

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const arrayWithDeletedProfile = profiles.filter(
    (profile) => profile.id !== parseInt(id)
  );
  profiles = arrayWithDeletedProfile;
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`http//localhost:${PORT}`);
});
