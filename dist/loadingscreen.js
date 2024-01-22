export const loadingscreen = document.querySelector(".loadingscreen");
export function loading() {
    loadingscreen.addEventListener('click', () => {
        loadingscreen.style.transform = "translateX(-100%)";
    });
}
