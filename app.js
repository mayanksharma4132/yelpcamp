var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var campgrounds=[
  {name:"Manali",image:"https://farm7.staticflickr.com/6201/6140447080_7096a438f3.jpg"},
  {name:"Kasol",image:"https://farm3.staticflickr.com/2046/32697202531_728ccdeab5.jpg"},
  {name:"Rishikesh",image:"https://farm4.staticflickr.com/3587/3785018342_938956010a.jpg"},
  {name:"Jaisalmer",image:"https://pixabay.com/get/ea34b90e20f4023ed1584d05fb1d4e97e07ee3d21cac104491f9c879a2e5b5b8_340.jpg"},
  {name:"Manali",image:"https://farm7.staticflickr.com/6201/6140447080_7096a438f3.jpg"},
  {name:"Kasol",image:"https://farm3.staticflickr.com/2046/32697202531_728ccdeab5.jpg"},
  {name:"Rishikesh",image:"https://farm4.staticflickr.com/3587/3785018342_938956010a.jpg"},
  {name:"Jaisalmer",image:"https://pixabay.com/get/ea34b90e20f4023ed1584d05fb1d4e97e07ee3d21cac104491f9c879a2e5b5b8_340.jpg"}
]

app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  res.render("campgrounds",{campgrounds:campgrounds});
})

app.post("/campgrounds",function(req,res){
  var name=req.body.name;
  var image=req.body.image;
  var newCampground={name:name,image:image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
})

app.get("/campgrounds/new",function(req,res){
  res.render("new.ejs")
})

app.listen(1337,function(){
  console.log("The YelpCamp Server Has Started!");
})
