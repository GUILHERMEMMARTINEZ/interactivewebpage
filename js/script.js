/*jshint esversion: 6 */

const secondsEl = document.querySelector(".seconds .number"),
    minutesEl = document.querySelector(".minutes .number"),
    hoursEl = document.querySelector(".hours .number"),
    daysEl = document.querySelector(".days .number");

const targetDate = new Date('2024-04-22T00:00:00'); // April 22, 2024 at midnight

function updateCountdown() {
    const now = new Date();
    const diffMs = targetDate - now; // Difference in milliseconds

    if (diffMs <= 0) {
        clearInterval(timeFunction);
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    const diffSecs = Math.floor(diffMs / 1000);
    const days = Math.floor(diffSecs / (60 * 60 * 24));
    const hours = Math.floor((diffSecs % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diffSecs % (60 * 60)) / 60);
    const seconds = diffSecs % 60;

    daysEl.textContent = days < 10 ? `0${days}` : days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

function notifyUser() {
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value;

    if (isValidEmail(emailValue)) {
        // Show success popup or any other logic you want to implement on successful email validation
        alert("Thank you! You will be notified with all the details soon.");
    } else {
        alert("Please enter a valid email address in the format 'example@gmail.com'.");
    }
}

function isValidEmail(email) {
    // Use regex to validate the email format
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

const timeFunction = setInterval(updateCountdown, 1000); // Updates the count every second

