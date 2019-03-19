var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'rootroot',
  database:'zhy_test'
})
connection.connect();

connection.query('select * from test',function(error,result,fieleds){
  if(error) throw error;
  console.log(result);
})