const page = document.querySelector("body");
const header = document.querySelector(".header");
const menuToggleBtn = document.querySelectorAll(".js-menu-toggler");
const navbarMenu = document.querySelector(".js-menu");
const navbarOverlay = document.querySelector(".js-menu-overlay");

// Navbar scroll effect
window.addEventListener("scroll", function () {
  if (this.scrollY > 100) {
    return header.classList.add("header--slide-down");
  }
  header.classList.remove("header--slide-down");
});

// Click event handler
function handleClick(element, cb) {
  element.addEventListener("click", function () {
    cb(this);
  });
}

// Mobile navbar menu toggler

/*  when menu is open / closed:
  # Hide / show menu
  # Hide / show menu dark bg
  # Enable / Disable scrolling
*/
function menuToggleHandler(btn) {
  if (btn.getAttribute("data-type").toLowerCase() == "open") {
    navbarOverlay.classList.remove("is-hidden");
    navbarMenu.classList.remove("is-hidden");
    return;
  }
  navbarMenu.classList.add("is-hidden");
  navbarOverlay.classList.add("is-hidden");
}

Array.from(menuToggleBtn).forEach((btn) => {
  handleClick(btn, menuToggleHandler);
});
