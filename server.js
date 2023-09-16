const express = require("express");
const app = express();

var cors = require('cors');
app.use(cors());

app.get("/", function (req, res) {
  res.json({waving: "Hello World"});
});

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));