const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapstime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        startTime = Date.now() - elapstime;
        timer = setInterval(update,10);
        isrunning = true;
    }
}

function stop(){
    if(isrunning){
        clearInterval(timer);
        elapstime = Date.now() - startTime;
        isrunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapstime = 0;
    isrunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapstime = currentTime - startTime;

    let hours = Math.floor(elapstime / (1000*60*60));
    let minutes = Math.floor(elapstime / (1000*60) % 60);
    let seconds = Math.floor(elapstime / 1000 % 60);
    let miliseconds = Math.floor(elapstime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");


    display.textContent = `${hours}: ${minutes}: ${seconds}: ${miliseconds}`;
}