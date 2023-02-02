// 서버 기본 셋팅
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;
app.set('view engine', 'ejs')
var db;

MongoClient.connect(
  "mongodb+srv://sangkyu:sk20031101@cluster0.xokd1wr.mongodb.net/?retryWrites=true&w=majority",
  function (error, client) {
    if (error) return console.log(error)

    db = client.db('study');

    
    
    app.listen(8080, function () {
        console.log("listening on 8080");
    });
    
}
);


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
    res.sendFile(__dirname + "/write.html");
});

app.post("/add", function (req, res) {
    res.sendFile(__dirname + "/add.html");

    db.collection('counter').findOne({name : 'PostCount' }, function(err, find_res) {
        console.log(find_res.totalPost)
        var totalPost = find_res.totalPost;

        db.collection('post').insertOne({ _id : totalPost + 1 ,'title' : req.body.title , 'date' : req.body.date} , function(error, res){
            console.log('saved');
            db.collection('counter').updateOne({name : 'postCount'}, {$inc : {totalPost : 1}}, function(){})
        });
    })


    console.log(req.body.title);
});

app.get('/list', function (req, res){
   
    db.collection('post').find().toArray(function(err, post_res) {
        console.log(post_res);
        res.render('list.ejs', { posts : post_res });
    });

}) 