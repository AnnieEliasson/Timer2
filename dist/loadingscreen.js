export const loadingscreen = document.querySelector(".loadingscreen");
export function loading() {
    loadingscreen.addEventListener('click', () => {
        //loadingscreen.style.display = "none";
        loadingscreen.style.transform = "translateX(-100%)";
    });
}
