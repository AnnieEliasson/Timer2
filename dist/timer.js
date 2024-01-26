import { minutes, setTimerPage } from "./setTimer.js";
import { alarmPage } from "./alarmpage.js";
import { breakTimer } from "./breaktimer.js";
import { analogPage } from "./menu.js";
const breakScreen = document.querySelector(".break");
let abort = false;
export const viewTimePage = document.querySelector(".view-time-page");
const intervalBox = document.getElementById("intervals");
const breakBox = document.getElementById("break");
const timerElement = document.getElementById('time-display');
const abortBtn = document.querySelectorAll(".abort-btn");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
// abort knappar. ta bort klockor och visa set time sidan
abortBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        abort = true;
        setTimerPage.style.transform = "translateY(0)";
        viewTimePage.style.transform = "translateY(100%)";
        analogPage.style.display = "none";
    });
});
// countdown
export function timer() {
    breakScreen.style.display = "none";
    let timeLimitInMinutes = minutes;
    let timeLimitInSeconds = timeLimitInMinutes * 60;
    let tick = 0;
    let tickMin = minutes * 6;
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
        // Digital
        timerElement.textContent = minutes + ':' + seconds;
        // Analog
        tick = tick - 6;
        if (tick === -360) {
            tick = 0;
            tickMin = tickMin - 6;
        }
        second.style.transform = `rotate(${tick}deg)`;
        minute.style.transform = `rotate(${tickMin}deg)`;
    }
    var timerInterval = setInterval(startTimer, 1000);
}
