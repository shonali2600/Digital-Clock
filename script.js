setInterval(function(){
    var curr_time = new Date();

    var hour = curr_time.getHours();
    var minutes = curr_time.getMinutes();
    var seconds = curr_time.getSeconds();
    var period = "AM";

    if(hour>=12){
        period = "PM";
    }
    if(hour>12){
        hour = hour - 12;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    var clock = document.getElementById('clock');
    var time = hour + ":" + minutes + ":" + seconds + " " + period;
    clock.innerText = time;
}, 1000);