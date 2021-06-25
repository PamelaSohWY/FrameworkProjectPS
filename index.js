const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
  express.urlencoded({
    extended: false
  })
);

//Import the landing page routes 
const landingRoutes = require('./routes/landing');
const posterRoutes= require('./routes/posters')

async function main() {
  // to test route
app.use('/', landingRoutes);
app.use('/posters', posterRoutes)

}//end of main 

main();

app.listen(3000, () => {
  console.log("Server has started");
});