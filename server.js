var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
var tables = [];

=======
var tables = [];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });



>>>>>>> cc9bab9897861fbcbc02a5df697057990ee922da
app.post("/tables", function (request, res){

    //josh and wiilie  stick code here 

});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


