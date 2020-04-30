var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index")
});

app.get("/about", function(req, res){
    res.render("about")
});

app.get("/projects", function(req, res){
    res.render("projects")
});
app.get("/blog", function(req, res){
    res.render("blog")
});

app.get("/skills", function(req, res){
    res.render("skills")
})





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initiated!")
})