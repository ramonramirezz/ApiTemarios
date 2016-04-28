var express = require('express');
var StringConn = require('../bd_string');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var route = express.Router();


route.get('/',function(req,res){
    var data = {};
        var connection = mysql.createConnection(StringConn);
        connection.query("SELECT * from university",function(err, rows, fields){
        if(rows.length != 0){
            data = rows;
            return res.json(data);

        }else{
            data = 'No universitys Found..';
            return res.json(data);
        }
    });
});

route.get('/:id',function(req,res){
    var data ={};
    var query = "SELECT * FROM ?? WHERE ??=?";
    var table = ["career","id_university",req.params.id];
    query = mysql.format(query,table);
    var connection = mysql.createConnection(StringConn);
    connection.query(query,function(err, rows, fields){
      if(rows.length != 0){
          data = rows;
          return res.json(data);

      }else{
          data = 'No careers Found..';
          return res.json(data);
      }
    });

});

route.post('/create_uni',function(req,res){
      var query = "INSERT INTO ??(??,??) VALUES (?,?)";
      var table = ["university","name_university","city",req.body.name, req.body,city];
      query = mysql.format(query,table);
      connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "University Added !"});
            }
        });
});
router.delete("/:id",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["university","id",req.params.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the university with id "+req.params.id});
            }
        });
    });
module.exports = route;
