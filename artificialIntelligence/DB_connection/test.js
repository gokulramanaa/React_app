const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5003;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'sys'
});

app.get('/api/hello', (req, res) => {
  // res.send({ express: 'Hello From Gokul' });
  // console.log(req);
  connection.query('show columns from host_summary', (error, results,fields) =>{
      if (error) throw error;
      // console.log(results);
      res.send(JSON.stringify(fields));
      // res.send({express: results[0].solution});
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
