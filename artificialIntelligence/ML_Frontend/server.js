const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'sys'
});


app.use(bodyParser.json())
app.post('/api/hello', (req, res) => {
  // res.send({ express: 'Hello From Gokul' });
  console.log(req.body.username);
  connection.query('select * from metrics', (error, results,fields) =>{
      if (error) throw error;
      res.send(JSON.stringify([results,fields]));
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
