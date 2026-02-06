// Selecting Start, Pause, and Reset buttons from the DOM
let startbtn = document.querySelector(".start");          // Start button
let pausebtn = document.querySelector(".pause");          // Pause button
let resetbtn = document.querySelector(".reset");          // Reset button

// Selecting input fields for hours, minutes, and seconds
let hourInput = document.querySelector(".hours");         // Hours input
let minuteInput = document.querySelector(".minutes");     // Minutes input
let secondInput = document.querySelector(".seconds");     // Seconds input

// Selecting the display area where time will be shown
let display = document.querySelector(".timer__display");  // Timer display

// Variables to store current time values
let seconds = 0;                                          // Seconds counter
let minutes = 0;                                          // Minutes counter
let hours = 0;                                            // Hours counter

// Variable to store setInterval reference
let timer = null;                                         // Timer ID

// ---------------- START BUTTON LOGIC ----------------
startbtn.addEventListener("click", () => {

    // Prevent starting multiple intervals on repeated clicks
    if (timer !== null) return;

    // Read values from input fields (default to 0 if empty)
    hours = Number(hourInput.value) || 0;
    minutes = Number(minuteInput.value) || 0;
    seconds = Number(secondInput.value) || 0;

    // Start countdown timer that runs every 1 second
    timer = setInterval(() => {

        // If time reaches 00:00:00, stop the timer
        if (seconds === 0 && minutes === 0 && hours === 0) {
            clearInterval(timer);                          // Stop interval
            timer = null;                                  // Reset timer ID
            return;
        }

        // If seconds become 0, borrow time from minutes or hours
        if (seconds === 0) {
            if (minutes > 0) {
                minutes--;                                 // Reduce minutes
                seconds = 59;                              // Reset seconds
            } else if (hours > 0) {
                hours--;                                   // Reduce hours
                minutes = 59;                              // Reset minutes
                seconds = 59;                              // Reset seconds
            }
        } else {
            seconds--;                                     // Normal decrement
        }

        // Update the display in HH : MM : SS format
        display.innerText =
            String(hours).padStart(2, '0') + " : " +
            String(minutes).padStart(2, '0') + " : " +
            String(seconds).padStart(2, '0');

    }, 1000);                                              // 1000ms = 1 second
});

// ---------------- PAUSE BUTTON LOGIC ----------------
pausebtn.addEventListener("click", () => {
    clearInterval(timer);                                  // Pause timer
    timer = null;                                          // Reset timer ID
});

// ---------------- RESET BUTTON LOGIC ----------------
resetbtn.addEventListener("click", () => {
    clearInterval(timer);                                  // Stop timer
    timer = null;                                          // Reset timer ID

    // Reset all time values
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Clear input fields
    hourInput.value = "";
    minuteInput.value = "";
    secondInput.value = "";

    // Reset display to initial state
    display.innerText = "00 : 00 : 00";
});
