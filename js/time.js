function updateTime(){
    var currentTime = new Date(), hours = currentTime.getHours(), minutes = currentTime.getMinutes(), seconds = currentTime.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    var t_str = hours + ":" + minutes + ":" + seconds + " ";
    
    if(hours > 11){
        t_str += "pm";
    }
    else{
        t_str += "am";
    }
    document.getElementById('time').innerHTML = t_str;
}
setInterval(updateTime, 1000);