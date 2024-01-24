// Allt är kaos! 
import { loading } from "./loadingscreen.js";
import { setTimer } from "./setTimer.js";




loading();
setTimer();


// FLYTTA MIG?!
const menuBtn = document.querySelectorAll(".logo-small")

menuBtn.forEach(button => {
    
    button.addEventListener('click', ()=>{
        console.log('menu-btn');
        const menu = document.querySelector(".menu") as HTMLElement;

        menu.classList.toggle('show');
        
      })

});


