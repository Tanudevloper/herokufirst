var express = require('express');
var router = express.Router();

const {albumscreate,getallalbums,getalbums,updatealbums,deletealbums} =require("../controller/post")
router.post("/createalbums",albumscreate);
router.get("/GetALLalbums",getallalbums);
router.get("/Getalbums/:id",getalbums);
router.put("/updatealbums/:id",updatealbums);
router.delete("/Deletealbums/:id",deletealbums);
module.exports=router;



