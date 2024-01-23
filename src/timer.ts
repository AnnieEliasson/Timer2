import {  minutes, setTimerPage } from "./setTimer.js";
import { alarmPage } from "./alarmpage.js";
import {breakTimer} from "./breaktimer.js";

const breakScreen = document.querySelector(".break") as HTMLElement
let abort = false;
export const viewTimePage = document.querySelector(".view-time-page") as HTMLElement
const intervalBox = document.getElementById("intervals") as HTMLInputElement
const breakBox = document.getElementById("break") as HTMLInputElement
const breakBtn = document.querySelector(".break-btn") as HTMLElement
const timerElement = document.getElementById('time-display')as HTMLElement
const abortBtn = document.querySelector(".abort-btn") as HTMLElement

abortBtn.addEventListener('click', ()=>{
    abort = true;

    setTimerPage.style.transform = "translateY(0)"
    viewTimePage.style.transform = "translateY(100%)"
  })


export function timer(){
    breakScreen.style.display= "none";
    var timeLimitInMinutes = minutes;
    var timeLimitInSeconds = timeLimitInMinutes * 60;
    
  function startTimer() {
  timeLimitInSeconds--;
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;
  
  
  if (abort === true){
    abort = false;
    clearInterval(timerInterval);
    //viewTimePage.style.display = "none";

  }
  
  if (timeLimitInSeconds === 0) {
    
    if(intervalBox.checked){
      clearInterval(timerInterval);
      timer();
    } else if(breakBox.checked){
      clearInterval(timerInterval);
      console.log("break")
      breakScreen.style.display = "flex"
  
      //const breakTimer = setTimeout(timer, 3000)
      

      breakTimer();

    } else{
      alarmPage()
      clearInterval(timerInterval);
    }
      
  }
  
  timerElement.textContent = minutes + ':' + seconds;
  
  }
  var timerInterval = setInterval(startTimer, 1000);
  }
 