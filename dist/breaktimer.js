import { timer } from "./timer.js";
const breakBtn = document.querySelector(".break-btn");
const displayBreakTime = document.querySelector(".break-countdown");
export function breakTimer() {
    console.log('breaktimer');
    let breakMinutes = 5;
    let breakSeconds = breakMinutes * 60;
    const breakCountdown = setInterval(() => {
        breakSeconds--;
        const minutes = Math.floor(breakSeconds / 60);
        const seconds = breakSeconds % 60;
        console.log(`${minutes} : ${seconds}`);
        if (breakSeconds === 0) {
            clearInterval(breakCountdown);
            timer();
        }
        displayBreakTime.innerHTML = `${minutes} : ${seconds}`;
    }, 1000);
    breakBtn.addEventListener('click', () => {
        clearInterval(breakCountdown);
        timer();
    });
}