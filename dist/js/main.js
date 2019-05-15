const menuBtn = document.querySelector(".container_hamburger");
const menu = document.querySelector(".container__nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
// const navLink = document.querySelectorAll(".nav-link");
const projectsImg = document.querySelectorAll(".container__project");

// set state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
menuNav.addEventListener("click", showActive);
// projectsImg.addEventListener("mouseover", makeOpacity);
window.addEventListener("scroll", hideMenu);

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

// hiding menu when you scroll page

function hideMenu() {
  if (showMenu === true) {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // set menu state
    showMenu = false;
  }
}

// change transparency on mouseover in projects section

function makeOpacity(event) {
  // projectsImg.forEach(item => item.classList.add("opacity"));
  // highlight the mouseover target
  // event.target.style.background = "rgba(0,0,0,.5)";
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

// active link change id on scroll
// Cache selectors
let lastId,
  topMenu = $(".menu-nav"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    let item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  let href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: offsetTop
      },
      300
    );
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  let fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  let cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  let id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("current")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("current");
  }
});

//button back to top
// Check distance to top and display back-to-top.
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").addClass("show-back-to-top");
  } else {
    $(".back-to-top").removeClass("show-back-to-top");
  }
});

// Click event to scroll to top.
$(".back-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});
