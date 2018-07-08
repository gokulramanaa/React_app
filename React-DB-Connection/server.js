const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Manoj@13',
  database : 'sys'
});

app.get('/api/hello', (req, res) => {
  // res.send({ express: 'Hello From Gokul' });
  connection.query('select * from metrics;', (error, results,fields) =>{
      if (error) throw error;
      // console.log(results);
      res.send(JSON.stringify(results));
      // res.send({express: results[0].solution});
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
