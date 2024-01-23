export const loadingscreen = document.querySelector(".loadingscreen") as HTMLElement


export function loading() : void{
loadingscreen.addEventListener('click', ()=>{
    loadingscreen.style.transform = "translateX(-100%)"
})
}