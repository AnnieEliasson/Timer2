import { timer } from "./timer.js";
const breakBtn = document.querySelector(".break-btn") as HTMLElement
const displayBreakTime = document.querySelector(".break-countdown") as HTMLElement

export function breakTimer() {
    console.log('breaktimer');


    let breakMinutes: number = 5;
    let breakSeconds: number = breakMinutes * 60;

    const breakCountdown: number = setInterval(()=>{

        breakSeconds -- ;
        const minutes: number = Math.floor(breakSeconds / 60);
        const seconds: number = breakSeconds % 60;

        console.log(`${minutes} : ${seconds}`)

        if(breakSeconds === 0){
            clearInterval(breakCountdown)
            timer()
        }
        
        displayBreakTime.innerHTML = `${minutes} : ${seconds}`
    }, 1000)

    breakBtn.addEventListener('click', ()=>{
        clearInterval(breakCountdown)
        timer()
      })


}

