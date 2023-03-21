window.onload = () => {
    /*Pomodoro*/
    let workTime;
    let breakTime;
    let restTime;
    let timesCompleted;
    let cyclesGoal;
    let cyclesCompleted = 0;
    let clock = document.getElementById("clock");
    let cyclesInput = document.getElementById("cycles-input");
    let startButton = document.getElementById("start-button");
    let workTimeInput = document.getElementById("work-time");
    let breakTimeInput = document.getElementById("break-time");
    let restTimeInput = document.getElementById("rest-time");
    function populateVariables() {
        console.log("populated variables");
        workTime = workTimeInput.value;
        breakTime = breakTimeInput.value;
        restTime = restTimeInput.value;
        cyclesGoal = cyclesInput.value;
        timesCompleted = 0;
    }
    startButton.onclick = () => {
        startPomodoro();
    }
    startButton.onclick = () => {
        populateVariables();
        startPomodoro();
    }
    function startPomodoro() {
        console.log("Started Pomodoro");
        pomodoroController();
    }

    function goalReached () {
        return cyclesGoal == cyclesCompleted;
    }

    function pomodoroController() {
        if (isRestTime()) {
            cyclesCompleted++;
            if (!goalReached()) {
                currentTime = restTime;
                timer();
                timesCompleted = 0;
            }
            else {
                console.log("Pomodoro terminó");
            }
            return;
        }

        if (timesCompleted % 2 == 0) {
            currentTime = workTime;
            timesCompleted++;
            timer();
            console.log("Tiempo de trabajo " + timesCompleted);
        } else {
            currentTime = breakTime;
            timesCompleted++;
            timer();
            console.log("Tiempo de descanso " + timesCompleted);
        }
        }

    function isRestTime() {
        return timesCompleted ==7;
    }
//Timer
let currentTime;
let seconds = 0;

function timer() {
    if (currentTime > 0 || seconds > 0) {
        if (seconds == 0) {
            seconds = 59;
            currentTime--;
        } else {
            seconds--;
        }
        updateClock();
        console.log(currentTime, seconds);
        interval = setTimeout(timer, 1000);
    } else {
        pomodoroController();
    // console.log("El temporizador terminó");
    }
}

let clockMinutes;
let clockSeconds;

function updateClock() {
    clockMinutes = formatNumbers(currentTime);
    clockSeconds = formatNumbers(seconds);
    clock.innerHTML = clockMinutes + ":" + clockSeconds;
}

function formatNumbers(time) {
    let formattedDigits;
    if (time < 10) {
        formattedDigits = "0" + time;
    } else {
        formattedDigits = time;
    }
    return formattedDigits;
}
}