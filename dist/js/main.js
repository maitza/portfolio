const menuBtn = document.querySelector(".container_hamburger");
const menu = document.querySelector(".container__nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const navLink = document.querySelectorAll(".nav-link");

// set state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
menuNav.addEventListener("click", showActive);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // set menu state
    showMenu = false;
  }
}

// adding css to active li - menu link
// Loop through the buttons and add the active class to the current/clicked button

function showActive() {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("current");
      current[0].className = current[0].className.replace(" current", "");
      this.className += " current";
    });
    // closing menu after link click
    toggleMenu();
  }
}

// close menu after link click
