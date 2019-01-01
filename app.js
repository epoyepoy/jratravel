const   express = require("express"),
        app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index"); 
});

app.get("/blogs/start-your-own-travel-business", function(req, res){
    res.render("blogs/start-your-own-travel-business"); 
});

app.get("/blogs/top-places-to-visit-in-the-philippines", function(req, res){
    res.render("blogs/top-places-to-visit-in-the-philippines"); 
});

app.get("/blogs/budget-and-mid-range-boracay-hotels", function(req, res){
    res.render("blogs/budget-and-mid-range-boracay-hotels"); 
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found!!!</h1>');
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!"); 
});

// app.listen(3000, function(){
//    console.log("The Server Has Started!"); 
// });