const express = require("express");
const router = express.Router(); //create a new express router 

//add a new route to the Express Router 
router.get('/', (req,res)=>{
    //test route
    //res.send("Welcome to landing")
    res.render('landing/index')
})

router.get('/about-us', (req,res)=>{
    res.render('landing/about-us')
})

router.get('/contact-us', (req,res)=>{
    res.render('landing/contact-us')
})

module.exports = router; 
//export out to the router