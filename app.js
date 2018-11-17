var express       = require("express"),
    app           = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index"); 
});

app.get("/blogs/start-your-own-travel-business", function(req, res){
    res.render("blogs/start-your-own-travel-business"); 
});

// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("The Server Has Started!"); 
// });

app.listen(3000, function(){
   console.log("The Server Has Started!"); 
});