import { timer } from "./timer.js";
const breakBtn = document.querySelector(".break-btn") as HTMLElement
const displayBreakTime = document.querySelector(".break-countdown") as HTMLElement


// Timer för rast
export function breakTimer() {
    console.log('breaktimer');


    let breakMinutes: number = 5;
    let breakSeconds: number = breakMinutes * 60;

    const breakCountdown: number = setInterval(()=>{

        breakSeconds -- ;
        const minutes: number = Math.floor(breakSeconds / 60);
        const seconds: number = breakSeconds % 60;

        // Om rasten är slut. ta bort rasttimer och sätt igång vanliga timern
        if(breakSeconds === 0){
            clearInterval(breakCountdown)
            timer()
        }
        
        // visar rast timern
        displayBreakTime.innerHTML = `${minutes} : ${seconds}`
    }, 1000)

    // avbryt rasten innan den är slut
    breakBtn.addEventListener('click', ()=>{
        clearInterval(breakCountdown)
        timer()
      })


}

