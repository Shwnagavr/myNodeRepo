var request = require('request');
var url = 'http://ipinfo.io';
//'http://api.openweathermap.org/data/2.5/weather?q=Bangalore,in&appid=5fdce6186b0daaa34e6c4ef8de63ad58';

module.exports = function (callback) {
request ({
    url: url,
    json: true
}, function (error, response,body) {
    if(error){
        callback();
    } else {
        callback(body);
    }
    
});
}