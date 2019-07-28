



BigDay = new Date("July 27, 2020");
msPerDay = 24 * 60 * 60 * 1000 ;
msPerHour = 60 * 60 * 1000 ;
msPerMin = 60 * 1000 ;
msPerSec = 1000;




var x = setInterval(function() {

var today = new Date();
timeLeft = (BigDay.getTime() - today.getTime());
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);


hoursLeft = Math.floor((timeLeft - daysLeft*msPerDay)/msPerHour);

minLeft =Math.floor((timeLeft - daysLeft*msPerDay -hoursLeft*msPerHour)/msPerMin);

secLeft= Math.floor((timeLeft - daysLeft*msPerDay -hoursLeft*msPerHour - minLeft*msPerMin)/msPerSec);



var daysText = document.getElementById("daysText");
var hoursText = document.getElementById("hoursText");
var minText = document.getElementById("minText");
var secText = document.getElementById("secText");





daysText.innerHTML=(daysLeft);
hoursText.innerHTML=(hoursLeft);
minText.innerHTML=(minLeft);
secText.innerHTML = secLeft;


  
}, 1000);
