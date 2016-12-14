var request = require('request');
var url =
'http://api.openweathermap.org/data/2.5/weather?q=Bangalore,in&appid=5fdce6186b0daaa34e6c4ef8de63ad58';

request ({
    url: url,
    json: true
}, function (error, response,body) {
    if(error){
        console.log('Unable to fetch Weather');
    } else {
        console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
    }
    
});