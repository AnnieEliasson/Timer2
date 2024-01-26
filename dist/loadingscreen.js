const loadingscreen = document.querySelector(".loadingscreen");
const logo = document.querySelector(".logo");
export function loading() {
    logo.addEventListener('click', () => {
        loadingscreen.style.transform = "translateX(-100%)";
    });
}
