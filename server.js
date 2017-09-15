/**
 * Created by Amal on 15/09/2017.
 */
var express = require("express");
var app     = express();
var bodyParser = require('body-parser')
var fs = require('fs');
var path    = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/subscribe', function (req, res) {
    console.log(req,query.email)
    fs.appendFile(path.join(__dirname+"/tmp/emails.txt"), req.query.email+"\n", function(err) {
        if(err) {
            return console.log(err);
        }
        res.send(console.log("The file was saved!"));
    });

})
// finally, let's start our server...
var server = app.listen( process.env.PORT || 8081, function(){
    console.log('Listening on port ' + server.address().port);
});