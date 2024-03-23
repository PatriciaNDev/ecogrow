/*
    This script controls the functionality of the burger menu in the header.

    It defines a function toggleMenu() to toggle the visibility of the menu navigation when the burger menu icon is clicked. The function also toggles the class and source of the menu icon.

    Additionally, it adds an event listener to the document to close the menu when a click occurs outside the menu or menu icon.

    Lastly, it adds an event listener to the menu icon to trigger the toggleMenu function when clicked.
*/

// Select the menu icon and menu navigation elements
const menu = document.getElementById("menu");
const menuNav = document.querySelector(".header-burger-menu_nav");

// Function to toggle the visibility of the menu navigation and change the menu icon
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

// Event listener to close the menu when a click occurs outside the menu or menu icon
document.addEventListener('click', function (event) {
    if (!menuNav.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove("active");
        menu.src = "/assets/icons/menu.svg";
        menuNav.style.display = "none";
    }
});

// Event listener to toggle the menu when the menu icon is clicked
menu.addEventListener("click", toggleMenu);