const alarmScreen = document.querySelector(".alarm");
const setTimerBtn = document.querySelector(".set-timer-btn");
export function alarmPage() {
    alarmScreen.style.display = "flex";
}
setTimerBtn.addEventListener('click', () => {
    alarmScreen.style.display = "none";
});
