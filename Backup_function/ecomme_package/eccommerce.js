
exports libTime = require("timestamp_package");

exports admin = {token:"Admin"};
exports  users = [ {token:"Pippo"}, {token:"Caio"},{token:"Sempronio"}];
exports products = [{id:"1", product:"IphoneX", amount:10}, {id:"2", product:"Samsung8", amount:10},
  {id:"3", product:"LgG5", amount:10},{id:"4", product:"AsusZenfone3", amount:10}];
exports  buyTime = [];

exports  insert = function(product){
        products.push({id:'5', product:'huaweiP10', amount:10})
        return products;
  }

exports delet = function(id){
      products.splice((id),1) //elimina il posto alla pozione 3 e shifta il resto sopra di uno;
      return products
    }
exports  put = function(id, product, amount){
  for(i=0;i<products.length;i++){
    if(id===products[i].id){
    products[i].id=id;
    products[i].product=product;
    products[i].amount=amount;
    }
  }
  return products
}

exports buy = function(id,amount){
  for(i=0;i<products.length;i++){
    if(id===products[i].id){
    products[i].amount-=amount;
    buyTime = {id:id, amount:amount, buy:libTime.time()};
    }
  }
      return [products,buyTime];
  }
