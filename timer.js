
const secondSpan = document.getElementById('seconds');
const minuteSpan = document.getElementById('minutes');
const hourSpan = document.getElementById('hours');
const restart = document.getElementById('restart');
const pause = document.getElementById('pause');
const start = document.getElementById('start');


function mintimer(min) {
    var hr = 0;
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
}

function hrtimer(hr) {
    if (hr < 9) {
        hourSpan.innerHTML = "0:"+ hr
    }
    else {
        hourSpan.innerHTML = hr;
    }
}

function timer(){
    var sec = 0;
    var min = 0;
    var timerr = setInterval(function() {      
       
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

    }, 1000);
} 

// if you guys know better, simpler solution please edit it.

// start
start.addEventListener("click", timer);


// TODO: to be implemented

// pause  
// var obj = new timer()
// pause.addEventListener('click', function() {
//     clearInterval(obj.timerr());
// }) 


// restart 
// restart.addEventListener("click", function(){ });


