var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var userNumber = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { userNumber: userNumber });
});

function get_join_number() {
    // var language = req.acceptsLanguages( 'zh-tw','zh-hk','en','en-us' );
    
    console.log("get join number");
    userNumber = 288;
    /* new habit form zh */
    unirest.get("https://baskarm28-typeform-v1.p.mashape.com/form/ilIPeh?key=ff0cb066904523ec68d318e7e09e012aff7a9595&completed=true&limit=10&offset=50")
        .header("X-Mashape-Key", "Rx6Hdn8AvZmshP3K2DLNtvzW5I0yp1AYG3djsnsCrAmFd118Yq")
        .header("Accept", "application/json")
        .end(function(result) {
            try {
                userNumber += Number(result.body.stats.responses.completed);
            } catch(err) {
                console.log("userNumber error : "  + err)
            }
    });
    /* new habit form (金麟) */
    unirest.get("https://baskarm28-typeform-v1.p.mashape.com/form/sQ1PhO?key=ff0cb066904523ec68d318e7e09e012aff7a9595&completed=true&limit=10&offset=50")
        .header("X-Mashape-Key", "Rx6Hdn8AvZmshP3K2DLNtvzW5I0yp1AYG3djsnsCrAmFd118Yq")
        .header("Accept", "application/json")
        .end(function(result) {
            try {
                userNumber += Number(result.body.stats.responses.completed);
            } catch(err) {
                console.log("userNumber error : "  + err)
            }
    });
    /* old join form en*/
    unirest.get("https://baskarm28-typeform-v1.p.mashape.com/form/RmhHAY?key=b4c58ff193ed4d038bd43d1925492329368f2c1b&completed=true&limit=10&offset=50")
        .header("X-Mashape-Key", "Rx6Hdn8AvZmshP3K2DLNtvzW5I0yp1AYG3djsnsCrAmFd118Yq")
        .header("Accept", "application/json")
        .end(function(result) {
            try {
                userNumber += Number(result.body.stats.responses.completed);
            } catch(err) {
                console.log("userNumber error : "  + err)
            }
    });
    
}

get_join_number();
setInterval(get_join_number,600000);
module.exports = router;
