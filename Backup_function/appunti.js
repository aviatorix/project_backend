//user.get('/users', function(req,res){ --> con query users?index= ""
user.get('/users/:index', function(req,res){
  console.log("query index");
  index=parseInt(req.query.index); //il valore dell'uri è una stringa
  res.status(200).json({"utente": users[index]});
})

user.post('/users', function(req,res){
  console.log("post");
  users.push(req.body); //tutto il body di postman
  res.status(201).json({'Array':users});
})

user.delete('/users/:index', function(req,res){
  console.log("delete");
  var index=parseInt(req.params.index);
  users.splice(index);
  res.status(200).json({'Array':users});
})

user.put('/users/:index', function(req,res){
  console.log("put");
  index=parseInt(req.params.index);
  users[index]=req.body;
  res.status(200).json({'Array':users });
})

user.get('/users', function (req,res){
  var utente=[];
  if(req.query.name==undefined){
      console.log("Utenti");
    res.status(200).json({'Array':users });
  }else{
          if(req.query.surname==undefined)
          {
            console.log("Nome");
            for(var i=0; i<users.length;i++)
            {
              if(req.query.name==users[i].name)
              {
                utente.push(users[i]);
              }
            }

          }else{
                  console.log("Nome e Cognome");
                  for(var i=0; i<users.length;i++)
                  {
                    if(req.query.name==users[i].name && req.query.surname==users[i].surname)
                    {
                      utente.push(users[i]);
                    }
                  }

                }
                res.status(200).json({'Array':utente });
        }

  })

user.listen(3001);



exports.put = function(id, product, amount){
  for(i=0;i<products.length;i++){
    if(products[i].id===id){
      //products[i].id=id;
      //console.log(products[i].id);
      products[i].product=product;
      console.log(products[i].product);
      products[i].amount=amount;
      console.log(products[i].amount);
      //return products;
      put={message:"Product modified"};
      console.log(put);
      return put, products ;
    }
    if(products[i].id!==id){
      put={message:"ID not found"};
      console.log(put);
      //console.log(products[i].id);
      console.log(products[i].product);
      console.log(products[i].amount);
      return put, products ;
    }
  }
}
exports.put = function(id, product, amount){
  for(i=0;i<products.length;i++){
    if(products[i].id===id){
      products[i].product=product;
      products[i].amount=amount;
    }
      return  products ;
    }
  }
}

// api put da pazzi
router.put('/mod/:id', auth, function(req,res){
  console.log("put");
  var amount=req.body.amount;
  console.log(req.params.id);
  var id=req.params.id;
  var product=req.body.product;
  console.log(req.body.product);
  console.log(req.body.amount);
  res.status(200).json(lib.put(id, product, amount));
});

router.put('/mod/:id/:product/:amount', auth, function(req,res){
  console.log("put");
  var i=0;
  while(i<lib.products.length){
      /*console.log(i);
      console.log(req.params.id);
      console.log(typeof(req.params.id));
      console.log(lib.products[i].id);
      console.log(typeof(lib.products[i].id));
      console.log(i);*/

      if(lib.products.id===products[i].id){
        console.log("sono qui");
      }
      /*lib.products[i].product=req.params.product;
      lib.products[i].amount=req.params.amount;
      console.log(typeof(lib.products[i].product));
      console.log(typeof(lib.products[i].amount));*/
      i++;
    }
  //res.status(200).json(lib.products);
});
//res.status(200).json(lib.put);//ritorna il messaggio su eccommerce.js


exports.buy = function(id,token){
  for(i=0;i<products.length;i++){
    if(id===products[i].id){
      if(products[i].amount > 0){
        products[i].amount--;
        return this.buyTime.push({
          id:products[i].id,
          amount:amount,
          tokenUser:token
          buyed:this.libTime.time()
        });

      }
    }
  }
}
