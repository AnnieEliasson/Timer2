export const loadingscreen = document.querySelector(".loadingscreen") as HTMLElement


export function loading(){
loadingscreen.addEventListener('click', ()=>{
    loadingscreen.style.display = "none";
})
}