const startClassButton = document.getElementsByClassName('start')[0];
const stopClassButton = document.getElementsByClassName('stop')[0];
const resetClassButton = document.getElementsByClassName('reset')[0];
const hourDigit = document.getElementsByClassName('hourDigit')[0];
const minuteDigit = document.getElementsByClassName('minuteDigit')[0];


let timer;
let hour =0;
let minute = 0;
let running =false;


function start(){

    if (!running){
        running = true;
        timer= setInterval(function(){
            minute++;
            if (minute == 60){
                minute=0;
                hour++;
            }

            hourDigit.textContent = String(hour).padStart(2, '0');
            minuteDigit.textContent = String(minute).padStart(2, '0');
            
        }, 60*1000);
    }
}

function stop(){

clearInterval(timer);
running=false;

}

function reset(){
    clearInterval(timer);
    running=false;
    hour = 0;
    minute = 0;
    hourDigit.textContext = '00';
    minuteDigit.textContent = '00';

}



startClassButton.addEventListener('click', start);
stopClassButton.addEventListener('click', stop);
resetClassButton.addEventListener('click', reset);




