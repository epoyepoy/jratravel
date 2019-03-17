const   express = require("express"),
        app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index"); 
});

app.get("/about", (req, res) => {
    res.render("about"); 
});

app.get("/blogs/start-your-own-travel-business", (req, res) => {
    res.render("blogs/start-your-own-travel-business"); 
});

app.get("/blogs/top-places-to-visit-in-the-philippines", (req, res) => {
    res.render("blogs/top-places-to-visit-in-the-philippines"); 
});

app.get("/blogs/budget-and-mid-range-boracay-hotels", (req, res) => {
    res.render("blogs/budget-and-mid-range-boracay-hotels"); 
});

app.use((req, res, next) => {
    res.status(404).render("404");
});

app.listen(process.env.PORT, process.env.IP,() => {
   console.log("The Server Has Started!"); 
});

// app.listen(3000,() => {
//    console.log("The Server Has Started!"); 
// });