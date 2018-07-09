var app = require("express")();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

 app.use(bodyParser.json())
 app.get('/',function(req,res){
         var msg=req.body.a;
         console.log(req.body.a);
 });

  http.listen(3000, function(){
  console.log('listening...');
  });
