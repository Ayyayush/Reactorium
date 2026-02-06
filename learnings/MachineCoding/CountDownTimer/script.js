let startbtn = document.querySelector(".start");
let pausebtn = document.querySelector(".pause");
let resetbtn = document.querySelector(".reset");

let hourInput = document.querySelector(".hours");
let minuteInput = document.querySelector(".minutes");
let secondInput = document.querySelector(".seconds");

let display = document.querySelector(".timer__display");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// START BUTTON
startbtn.addEventListener("click", () => {

    if (timer !== null) return;        // prevent multiple intervals

    hours = Number(hourInput.value) || 0;
    minutes = Number(minuteInput.value) || 0;
    seconds = Number(secondInput.value) || 0;

    timer = setInterval(() => {

        if (seconds === 0 && minutes === 0 && hours === 0) {
            clearInterval(timer);
            timer = null;
            return;
        }

        if (seconds === 0) {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        display.innerText =
            String(hours).padStart(2, '0') + " : " +
            String(minutes).padStart(2, '0') + " : " +
            String(seconds).padStart(2, '0');

    }, 1000);
});

// PAUSE BUTTON
pausebtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

// RESET BUTTON
resetbtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    hourInput.value = "";
    minuteInput.value = "";
    secondInput.value = "";

    display.innerText = "00 : 00 : 00";
});
