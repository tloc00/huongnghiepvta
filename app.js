const express = require("express");
const app = express();

app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://tanloc:tanloc0413@blog-buhzk.mongodb.net/viewsDB", {useUnifiedTopology: true, useNewUrlParser: true });
const viewsSchema = {
  views: Number,
  _id: Number
};
const Views = mongoose.model("views", viewsSchema);


const ejs = require("ejs");
app.set('view engine', 'ejs');





var views, data;
app.get("/", function(req, res){
  Views.findOne({_id: 1}, function(err, v) {
   console.log("v= " + views);

if(v != null){
 console.log("ez");
 views = v.views;
 console.log("v= " + views);
   Views.updateOne({_id: 1}, {views: views + 1}, function(err){
     if(err)
     console.log(err);
     else {
     console.log("ok");
     }
 });
}
else
{
 views = 980;
 const v = new Views({
   views: 980,
   _id: 1
 });
 v.save();
 console.log(v);
}
     res.render("home", {views: views});
 });
});


app.get("/test1", function(req, res){
  res.render("test1", {views: views});
});
app.get("/test2", function(req, res){
  res.render("test2", {views: views});
});
app.get("/test3", function(req, res){
  res.render("test3", {views: views});
});
app.get("/test4", function(req, res){
  res.render("test4", {views: views});
});
app.get("/test5", function(req, res){
  res.render("test5", {views: views});
});
app.get("/test6", function(req, res){
  res.render("test6", {views: views});
});
app.get("/test7", function(req, res){
  res.render("test7", {views: views});
});
app.get("/test8", function(req, res){
  res.render("test8", {views: views});
});
app.get("/test9", function(req, res){
  res.render("test9", {views: views});
});
app.get("/test10", function(req, res){
  res.render("test10", {views: views});
});
app.get("/60university", function(req, res){
  res.render("schoolList", {views: views});
});
app.get("/career-group", function(req, res) {
  res.render("careerGroup", {views: views});
});
app.listen(process.env.PORT || 3000, function(){
console.log("started");
});
