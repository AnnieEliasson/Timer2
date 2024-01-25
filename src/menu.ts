export function menu (){

const menuBtn = document.querySelectorAll(".logo-small")

menuBtn.forEach(button => {
    
    button.addEventListener('click', ()=>{
        console.log('menu-btn');
        const menu = document.querySelector(".menu") as HTMLElement;

        menu.classList.toggle('show');
        
      })

});
}


