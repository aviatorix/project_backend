var express = require('express');
var router= express.Router ();
var lib = require('ecomme_package');

var authUser = function(req,res,next){
  if(req.query.token==="pippo"||req.query.token==="caio"||
    req.query.token==="sempronio"){
    next();
  }
  else{
    res.status(401).json({message:"authentication error"});
  }
}
/*
router.get('/buy/:id/:amount', auth, function(req,res){
  console.log("buying");
  lib.buy(parseInt(req.params.id), parseInt(req.params.amount));
  res.status(200).json({message:'congratulations on the purchase'});
  //res.status(200).json(buyTime);
});*/
router.get('/DBU', authUser, function (req,res){
  res.status(200).json(lib.productNow());
  });

router.post('/buy/:id', authUser, function(req, res) {
  lib.buy(parseInt(req.params.id),req.query.token)
  res.status(200).json({message:'congratulations on the purchase'});
})

module.exports=router;
