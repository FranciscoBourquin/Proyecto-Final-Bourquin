const btn = document.querySelector("button.boton-menu-movil");
const menu = document.querySelector(".menu-movil");

btn.addEventListener ("click", () => {
    menu.classList.toggle("hidden");
});