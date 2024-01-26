import { timer } from "./timer.js";
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
const displayMinutes = document.querySelector(".minutes");
const startBtn = document.querySelector(".start-btn");
const viewTimePage = document.querySelector(".view-time-page");
export const setTimerPage = document.querySelector(".set-timer-page");
export let minutes = 10;
export function setTimer() {
    leftBtn.addEventListener('click', () => {
        minutes--;
        if (minutes < 1) {
            minutes = 1;
        }
        displayMinutes.innerHTML = minutes.toString();
    });
    rightBtn.addEventListener('click', () => {
        minutes++;
        displayMinutes.innerHTML = minutes.toString();
    });
    startBtn.addEventListener('click', () => {
        setTimerPage.style.transform = "translateY(-100%)";
        viewTimePage.style.transform = "translateY(0)";
        timer();
    });
}
