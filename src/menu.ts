export const analogPage = document.querySelector(".analog-page") as HTMLElement;

export function menu (){

const menuBtn = document.querySelectorAll(".logo-small")
const menuItems = document.querySelectorAll("li")
const menu = document.querySelector(".menu") as HTMLElement;

// eventlyssnare på varje grejj i menyn. Visa vald vy.
menuItems.forEach(item => {

  item.addEventListener('click', (e)=>{

    let clicked = e.target as HTMLElement
    if(clicked.classList.value === "analog"){
      
      analogPage.style.display = "flex"
      menu.classList.toggle('show');

    } else if(clicked.classList.value === "digital"){

      const digitalPage = document.querySelector(".view-time-page") as HTMLElement;
      digitalPage.style.display = "flex"
      analogPage.style.display = "none"
      menu.classList.toggle('show');

    }

  })
  
});

// toggla meny när man klickar på menyknapp.
menuBtn.forEach(button => {
    
    button.addEventListener('click', ()=>{
        
        menu.classList.toggle('show');

      })

});
}


