let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    if (secondsElapsed > 0) {
        secondsElapsed--;
    } else if(secondsElapsed === 0 && interval) {
        alert("Time's up!")
        stopClock();
    }
    else {
        secondsElapsed++;
    }
    setTime();
}

function startClock() {
    if (interval) stopClock();
    interval = setInterval(timer, 1000);
}

function stopClock() {
    clearInterval(interval);
    interval = null;
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
}

function plus10() {
    secondsElapsed += 600;
    setTime();
}

function takeBreak() {
    secondsElapsed += 1200;
    setTime();
    startClock();
}