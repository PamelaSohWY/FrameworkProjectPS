const express = require("express");
const router = express.Router();

//#1 import in the Product Model 
const {Poster} = require ('../models')

router.get('/', async (req,res)=>{
//#2 fetch all the posters (ie select * from posters)
let posters = await Poster.collection().fetch();
res.render('posters/index',{ //this refers to URL and not a specific file 
    'posters':posters.toJSON() //#3 convert all to JSON

})

})
module.exports = router;