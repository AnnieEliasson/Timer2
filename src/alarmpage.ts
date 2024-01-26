import {  setTimerPage } from "./setTimer.js";
import { viewTimePage } from "./timer.js";

const alarmScreen = document.querySelector(".alarm") as HTMLElement
const setTimerBtn = document.querySelector(".set-timer-btn") as HTMLElement
const analogPage = document.querySelector(".analog-page") as HTMLElement;

// Visa Larmvy
export function alarmPage(): void {
    alarmScreen.style.display = "flex";
  }
  
  setTimerBtn.addEventListener('click', ()=>{
    alarmScreen.style.display = "none"
    setTimerPage.style.transform = "translateY(0)"
    viewTimePage.style.transform = "translateY(100%)"
    analogPage.style.display = "none";

  })