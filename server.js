var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var myParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("myNewDatabase");
  
  /* dbo.collection('posts').insertMany([
    {
        id:1, name:"First post", content:"This is first post content!"
    },
    {
        id:2, name:"Second post", content:"This is second post !"
    },
    {
        id:3, name:"Thirst post", content:"This is thirst post !"
    }     
  ])
  .then(function(result) {
    // process result
  }) */
  //
  db.close();
});


var con = mysql.createConnection({
    host: "10.0.5.100",
    user: "EBMSQLUser",
    password: "eSU!1653",
    port: 3306
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var express = require('express');
var app = express();
var cors = require('cors')
app.options('*', cors()) // include before other routes 
app.use(cors())
app.use(myParser.urlencoded({extended : true}));

app.get('/', function(req ,res ) {
    res.statusCode = 200;
    console.log("get action");
    res.setHeader('Content-Type', 'application/json');
    var jsonReturn ;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("myNewDatabase");
        dbo.collection("posts").find({}).toArray(function(err, result) {
            if (err) throw err;
            db.close();
            res.send(JSON.stringify(result));
            
        });
    });    
    
    

});
app.get('/bloger', function(req ,res ) {
    res.statusCode = 200;      
    res.setHeader('Content-Type', 'application/json');
    con.query("SELECT UserId_int,FirstName_vch,LastName_vch,Address1_vch,EmailAddress_vch FROM simpleobjects.useraccount order by UserId_int desc  ", function (err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));                    
    });  
    
    
});

app.get('/black-list', function(req ,res ) {
    res.statusCode = 200;      
    res.setHeader('Content-Type', 'application/json');
    con.query("SELECT WordId,Words_vch as word,UpdateDate_dt as date FROM simpleobjects.black_list_words", function (err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));                    
    });  
    
    
});

app.post('/', function(req ,res ) {
    res.statusCode = 200;
    console.log("post action");
    res.setHeader('Content-Type', 'application/json');
    res.send("");

});

var server = app.listen(8888, "127.0.0.1",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);    
    
});