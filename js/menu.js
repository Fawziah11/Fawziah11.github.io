const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{ hundleMenu(); })

function hundleMenu(){
    menu.classList.toggle("is-active"); //this method if class is active the make it unactive, and vice verse
    action.classList.toggle("is-active");
}