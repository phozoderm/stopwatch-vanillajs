window.onload = function () {
    let seconds = 0;
    let tens = 0;
    let appendTens = document.getElementById("tens");
    let appendSeconds= document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let interval;
    buttonStart.onclick = function (){
        clearInterval(interval)
        interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function (){
        clearInterval(interval);
    }
    buttonReset.onclick = function (){
        clearInterval(interval);
        seconds = "00";
        tens = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    function startTimer(){
        tens++;
        if (tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}
