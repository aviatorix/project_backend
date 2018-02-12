var express = require('express');
var router= express.Router ();
var lib = require('ecomme_package');

var auth = function(req,res,next){
  if(req.query.token==="admin"){
    next();
  }
  else{
    res.status(401).json({message:"authentication error"});
  }
}


router.post('/add', auth, function(req,res){
  console.log("post");
  var amount=parseInt(req.body.amount);
  res.status(201).json(lib.insert(req.body.product, amount));

})

router.delete('/del/:id', auth, function(req,res){
  console.log("delete");
  res.status(200).json(lib.delet(parseInt(req.params.id)));
})

router.put('/mod/:id', auth, function(req,res){
  console.log("put");
  var amount=parseInt(req.body.amount);
  var id=parseInt(req.params.id);
  var product=req.body.product;
  res.status(201).json(lib.put(id, product, amount));
});

router.get('/DB', auth, function (req,res){
  res.status(200).json(lib.productNow());
  });

router.get('/DBBuyed', auth, function (req,res){
    res.status(200).json(lib.productAcquired());
    });

module.exports=router;
