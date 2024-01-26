import { timer } from "./timer.js";

const leftBtn = document.querySelector(".left-arrow") as HTMLElement
const rightBtn = document.querySelector(".right-arrow") as HTMLElement
const displayMinutes = document.querySelector(".minutes") as HTMLElement
const startBtn = document.querySelector(".start-btn") as HTMLElement
const viewTimePage = document.querySelector(".view-time-page") as HTMLElement
export const setTimerPage = document.querySelector(".set-timer-page") as HTMLElement
export let minutes: number = 10;


export function setTimer(): void{
leftBtn.addEventListener('click', ()=>{
    minutes --

    if(minutes < 1){
        minutes = 1;
    }
    displayMinutes.innerHTML = minutes.toString()    
})

rightBtn.addEventListener('click', ()=>{
    minutes ++
    displayMinutes.innerHTML = minutes.toString()
})

startBtn.addEventListener('click', ()=>{
    setTimerPage.style.transform = "translateY(-100%)"
    viewTimePage.style.transform = "translateY(0)"
    
    timer();
} )
}