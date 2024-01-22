import {  minutes } from "./setTimer.js";
import { alarmPage } from "./alarmpage.js";

const breakScreen = document.querySelector(".break") as HTMLElement
let abort = false;
const viewTimePage = document.querySelector(".view-time-page") as HTMLElement
const intervalBox = document.getElementById("intervals") as HTMLInputElement
const breakBox = document.getElementById("break") as HTMLInputElement
const breakBtn = document.querySelector(".break-btn") as HTMLElement
const timerElement = document.getElementById('time-display')as HTMLElement
const abortBtn = document.querySelector(".abort-btn") as HTMLElement

abortBtn.addEventListener('click', ()=>{
    abort = true;
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
    viewTimePage.style.display = "none";
  }
  
  if (timeLimitInSeconds === 0) {
    
    if(intervalBox.checked){
      clearInterval(timerInterval);
      timer();
    } else if(breakBox.checked){
      clearInterval(timerInterval);
      console.log("break")
      breakScreen.style.display = "flex"
  
      const breakTimer = setTimeout(timer, 3000)
  
      breakBtn.addEventListener('click', ()=>{
        clearTimeout(breakTimer)
        timer()
      })
    } else{
      viewTimePage.style.display = "none";
      alarmPage()
      clearInterval(timerInterval);
    }
      
  }
  
  timerElement.textContent = minutes + ':' + seconds;
  
  }
  var timerInterval = setInterval(startTimer, 1000);
  }
 