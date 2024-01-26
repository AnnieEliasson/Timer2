const loadingscreen = document.querySelector(".loadingscreen") as HTMLElement
const logo = document.querySelector(".logo")

export function loading() : void{

    logo.addEventListener('click', ()=>{
        loadingscreen.style.transform = "translateX(-100%)"
    })
}