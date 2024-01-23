import { minutes, setTimerPage } from "./setTimer.js";
import { alarmPage } from "./alarmpage.js";
import { breakTimer } from "./breaktimer.js";
const breakScreen = document.querySelector(".break");
let abort = false;
export const viewTimePage = document.querySelector(".view-time-page");
const intervalBox = document.getElementById("intervals");
const breakBox = document.getElementById("break");
const breakBtn = document.querySelector(".break-btn");
const timerElement = document.getElementById('time-display');
const abortBtn = document.querySelector(".abort-btn");
abortBtn.addEventListener('click', () => {
    abort = true;
    setTimerPage.style.transform = "translateY(0)";
    viewTimePage.style.transform = "translateY(100%)";
});
export function timer() {
    breakScreen.style.display = "none";
    let timeLimitInMinutes = minutes;
    let timeLimitInSeconds = timeLimitInMinutes * 60;
    function startTimer() {
        timeLimitInSeconds--;
        let minutes = Math.floor(timeLimitInSeconds / 60);
        let seconds = timeLimitInSeconds % 60;
        if (abort === true) {
            abort = false;
            clearInterval(timerInterval);
        }
        if (timeLimitInSeconds === 0) {
            if (intervalBox.checked) {
                clearInterval(timerInterval);
                timer();
            }
            else if (breakBox.checked) {
                clearInterval(timerInterval);
                console.log("break");
                breakScreen.style.display = "flex";
                breakTimer();
            }
            else {
                alarmPage();
                clearInterval(timerInterval);
            }
        }
        timerElement.textContent = minutes + ':' + seconds;
    }
    var timerInterval = setInterval(startTimer, 1000);
}
