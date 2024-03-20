const menu = document.getElementById("menu");
const menuNav = document.querySelector(".header-burger-menu_nav");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.src = "/assets/icons/menu.svg";
        menuNav.style.display = "none";
    } else {
        menu.classList.add("active");
        menu.src = "/assets/icons/opened-menu.svg";
        menuNav.style.display = "block";
    }
}

document.addEventListener('click', function (event) {
    if (!menuNav.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove("active");
        menu.src = "/assets/icons/menu.svg";
        menuNav.style.display = "none";
    }
});

menu.addEventListener("click", toggleMenu);