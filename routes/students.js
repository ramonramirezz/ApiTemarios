var express = require('express');
var StringConn = require('../bd_string');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var route = express.Router();


route.get('/',function(req,res){
    var data = {
        "error":1,
        "Alumnos":""
    };
        var connection = mysql.createConnection(StringConn);
        connection.query("SELECT * from alumnos",function(err, rows, fields){
        if(rows.length != 0){
            data["error"] = 0;
            data["Alumnos"] = rows;
            return res.json(data);

        }else{
            data["Alumnos"] = 'No alumnos Found..';
            return res.json(data);
        }
    });
});

module.exports = route;
