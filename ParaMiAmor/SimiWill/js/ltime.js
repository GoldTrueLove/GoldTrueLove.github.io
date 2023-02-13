// set time from the first day to now
function timeElapse(date) {
    var current = Date(); //get current time
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var showing = "<span class=\"digit\">" + days + "</span> Dias <span class=\"digit\">" + hours + "</span> Horas <span class=\"digit\">" + minutes + "</span> Minutos <span class=\"digit\">" + seconds + "</span> Segundos";
    $("#clock").html(showing);
}

//set the beginning time
var begin = new Date();
begin.setFullYear(2023, 1, 12); //se coloca un mes anterior por error del sistema
begin.setHours(12);
begin.setMinutes(11);
begin.setSeconds(0);
begin.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "Sorry,please don't use IE browser or 360Safety browser QAQ<br/>I recommend you to use Chrome/Firefox/Safari";
    document.body.appendChild(msg);
    document.execCommand("stop");
} else {
    timeElapse(begin);
    setInterval(function() {
        timeElapse(begin);
    }, 500);
}