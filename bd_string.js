var app = require('express')(); // Express App include
var mysql = require('mysql'); // Mysql include
var connection = {
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'sumarydb',
};
module.exports = connection;
