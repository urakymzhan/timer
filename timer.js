
const secondSpan = document.getElementById('seconds');
const minuteSpan = document.getElementById('minutes');
const hourSpan = document.getElementById('hours');
const restart = document.getElementById('restart');
const pause = document.getElementById('pause');
const start = document.getElementById('start');

var hr = 0;
var sec = 0;
var min = 0;

function mintimer(min) {

    if (min < 9) {
        minuteSpan.innerHTML = "0:"+ min
    }
    else if (min == 60) {
        hr++;
        min = 0;
        minuteSpan.innerHTML = "0:"+ min;
        hrtimer(hr);
    }
    else {
        minuteSpan.innerHTML = min;
    }
    hr = hr;
}

function hrtimer(hr) {
    if (hr < 9) {
        hourSpan.innerHTML = "0:"+ hr
    }
    else {
        hourSpan.innerHTML = hr;
    }
}

var timerr;
function timer(e){
    timerr = setInterval(function() {     
        if (sec < 9) {
            secondSpan.innerHTML='0:'+ sec;
        } 
        else if (sec == 60){
            sec = 0;
            min++;
            secondSpan.innerHTML = "0:" + sec;
            mintimer(min);
        }
        else {
            secondSpan.innerHTML=sec;
        }
        sec++;
        sec = sec;
        min = min;

    }, 1000);

    // disable button
    start.disabled = true;
} 


// start
start.addEventListener("click", function(event) {
    timer(event)
});


// pause  
pause.addEventListener('click', function() {
    // enable start button
    start.disabled = false;
    clearInterval(timerr);
}) 


// restart 
restart.addEventListener("click", function(event) {
    // enable start button - optional
    // start.disabled = false;
    clearInterval(timerr);
    sec = 0;
    min = 0;
    hr = 0;
    timer(event)
});


